.DEFAULT_GOAL = build

default : build
all : setup build

.ONESHELL: # Applies to every targets in the file!

export PATH := $(shell pwd)/node_modules/.bin:$(PATH)

export PXT_FORCE_LOCAL := 1 
export PXT_RUNTIME_DEV := 1 
export PXT_ASMDEBUG := 1 
export PXT_NODOCKER := 1 

PXT_LIBRARIES := pxt pxt-common-packages pxt-steami pxt-steami-backend
PXT_COMMANDS := add buildcss buildjres buildsimjs buildsprites buildtarget bump checkdocs checkpkgcfg ci console deploy extract help init install npminstallnative run serve staticpkg tag testghpkgs update usedblocks 
# Arguments par défaut pour chaque commande PXT
PXT_ADD_ARGS ?= 
PXT_BUILDCSS_ARGS ?= 
PXT_BUILDJRES_ARGS ?= 
PXT_BUILDSIMJS_ARGS ?= 
PXT_BUILDSPRITES_ARGS ?= 
PXT_BUILDTARGET_ARGS ?= --localbuild --force
PXT_BUMP_ARGS ?= 
PXT_CHECKDOCS_ARGS ?= 
PXT_CHECKPKGCFG_ARGS ?= 
PXT_CI_ARGS ?= 
PXT_CONSOLE_ARGS ?= 
PXT_DEPLOY_ARGS ?= 
PXT_EXTRACT_ARGS ?= 
PXT_HELP_ARGS ?= 
PXT_INIT_ARGS ?= 
PXT_INSTALL_ARGS ?= 
PXT_NPMINSTALLNATIVE_ARGS ?= 
PXT_RUN_ARGS ?= 
PXT_SERVE_ARGS ?= --localbuild --rebundle --noauth --no-browser --no-serial -h '0.0.0.0'
PXT_STATICPKG_ARGS ?= -o ../static/ --localbuild
PXT_TAG_ARGS ?=
PXT_TESTGHPKGS_ARGS ?= 
PXT_UPDATE_ARGS ?= 
PXT_USEDBLOCKS_ARGS ?= 

PXT="/workspaces/makecode-steami/node_modules/.bin/pxt"

define install_node_package
	echo "Installing $1 ..." 
	cd $1 || exit
	npm install --link
endef

define _remove_file_if_exist
	if [ -f $1 ] ; then 
		echo "Remove $1" 
		rm -f $1
	fi
endef

define _remove_directory_if_exist
	if [ -d $1 ] ; then 
		echo "Remove directory $1" 
		rm -Rf $1
	fi
endef

define deepclean_node_package
	echo "Deep cleanning $1 .."
	$(call _remove_file_if_exist,$1/package-lock.json)
	$(call _remove_directory_if_exist,$1/node_modules)
endef

define pxt_command
	echo "PXT = $(PXT)"
	echo "Call pxt $1"
	if ! [ -x $(PXT) ]; then
		echo "pxt is not installed ! Please run make setup first" 
		exit
	fi
	cd pxt-steami || exit
	pxt $1
endef

define _clean_static
	echo "Clean static build" 
	$(call _remove_directory_if_exist,static)
endef

define _clean_pxt_steami
	echo "Clean pxt-steami build" 

	if [ -x "$(PXT)" ]; then
		echo "pxt found ! \n Automatic cleanning"
		if [ -d pxt-steami/built ]; then
			cd pxt-steami || exit
			pxt clean
		fi
	else
		echo "pxt not found ! \n Manual cleanning"
		$(call _remove_directory_if_exist,pxt-steami/built)
		$(call _remove_directory_if_exist,pxt-steami/libs/core/built)
		$(call _remove_directory_if_exist,pxt-steami/libs/blocksprj/built)
	fi
endef

define _clean_pxt_core
	echo "Clean pxt-core build" 
	$(call _remove_directory_if_exist,pxt/built)
endef

define _clean_pxt_common_packages
	echo "Clean pxt-common-packages build" 
	$(call _remove_directory_if_exist,pxt-common-packages/built)
endef

define _clean_pxt_steami_backend_certificates
	echo "Clean pxt-steami-backend certificates ..." 
	$(call _remove_file_if_exist,pxt-steami-backend/https/fastify.cert)
	$(call _remove_file_if_exist,pxt-steami-backend/https/fastify.key)
	$(call _remove_file_if_exist,pxt-steami-backend/https/rootCA.pem)
endef

define _clean
	$(call _clean_static)
	$(call _clean_pxt_steami)
endef

define _deepclean
	$(call _clean)
	$(call _clean_pxt_common_packages)
	$(call _clean_pxt_core)
	$(call deepclean_node_package,pxt)
	$(call deepclean_node_package,pxt-common-packages)
	$(call deepclean_node_package,pxt-steami)
	$(call deepclean_node_package,pxt-steami-backend)
	$(call deepclean_node_package,.)
endef

define _generate_localcertificates
	export CAROOT=$(PWD)/pxt-steami-backend/https
	mkcert -install 
	mkcert -cert-file pxt-steami-backend/https/fastify.cert -key-file pxt-steami-backend/https/fastify.key 'makecode.local' localhost 127.0.0.1 ::1
endef

define _install_cert_for_local_dev
	if [ -f /.dockerenv ]; then 
		echo "This rule work only for the host system"
	else
		sudo cp pxt-steami-backend/https/rootCA.pem /usr/local/share/ca-certificates/rootCA.crt
		sudo update-ca-certificates
		sudo sh -c "echo 127.0.0.1 makecode.local>>/etc/hosts"
	fi
endef

.PHONY : prepare
prepare :
	@echo "Install Git hooks"
	git config core.hooksPath .hooks

.PHONY : setup
setup : prepare clean $(PXT) install-makecode-steami $(addprefix install-,$(PXT_LIBRARIES))

.PHONY : clean
clean : ;@$(call _clean)

.PHONY : deepclean
deepclean : ;@$(call _deepclean)

# Création des cibles de build pour chaque package pxt
define _install_node_package_template
.PHONY: install-$1
install-$1: $2/node_modules/.package-lock.json $2/package-lock.json

$2/node_modules/.package-lock.json $2/package-lock.json: $2/package.json
	@$$(call install_node_package,$$(<D))

endef

# Création de la target install-makecode-steami
$(eval $(call _install_node_package_template,makecode-steami,.))

# Création des targets install-pxt-XXX
$(foreach target,$(PXT_LIBRARIES),$(eval $(call _install_node_package_template,$(target),$(target))))

$(PXT) : pxt/built/target.json pxt-common-packages/node_modules/.package-lock.json node_modules/.package-lock.json

pxt/built/target.json : pxt/node_modules/.package-lock.json
	cd pxt || exit 
	npm run build

define _call_pxt_command_template
.PHONY: $1
$1: $3
	@$$(call pxt_command,$2 $$(PXT_$(shell echo $2 | tr '[:lower:]' '[:upper:]')_ARGS))

endef

$(eval $(call _call_pxt_command_template,build,buildtarget,$(PXT)))

$(foreach command,$(PXT_COMMANDS),$(eval $(call _call_pxt_command_template,$(command),$(command),$(PXT))))

.PHONY : package
package : static/target.json

static/target.json : $(PXT)
	@$(call pxt_command,staticpkg $(PXT_STATICPKG_ARGS))

.PHONY : staticserve
staticserve : static/target.json pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/node_modules/.package-lock.json
	nodemon pxt-steami-backend/server.js

.PHONY : clean_localcertificates
clean_localcertificates:;@$(call _clean_pxt_steami_backend_certificates)

.PHONY : localcertificates
localcertificates: pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/https/rootCA.pem

pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/https/rootCA.pem & : ;@$(call _generate_localcertificates)

.PHONY : install_cert_for_local_dev
install_cert_for_local_dev : pxt-steami-backend/https/rootCA.pem
	@$(call _install_cert_for_local_dev)

# A useful debug Make Target - found from
# http://lists.gnu.org/archive/html/help-make/2005-08/msg00137.html
.PHONY: printvars
printvars:
	@$(foreach V,$(sort $(.VARIABLES)), \
	$(if $(filter-out environment% default automatic, \
	$(origin $V)),$(warning $V=$($V) ($(value $V)))))

# Affiche toutes les cibles disponibles dans le Makefile
.PHONY: list
list:
	@LC_ALL=C $(MAKE) -pRrq -f $(firstword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/(^|\n)# Files(\n|$$)/,/(^|\n)# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | grep -E -v -e '^[^[:alnum:]]' -e '^$@$$'

