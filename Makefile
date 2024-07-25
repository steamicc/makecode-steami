.ONESHELL: # Applies to every targets in the file!

export PATH := $(shell pwd)/node_modules/.bin:$(PATH)

export PXT_FORCE_LOCAL := 1 
export PXT_RUNTIME_DEV := 1 
export PXT_ASMDEBUG := 1 
export PXT_NODOCKER := 1 

PXT="/workspaces/makecode-steami/node_modules/.bin/pxt"

define install_node_package
	echo "Installing $1 ..." 
	cd $1 || exit
	npm install --link
endef

define deepclean_node_package
	echo "Deep clean $1" 
	rm -Rf "$1/node_modules"
	rm -f "$1/package-lock.json"
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
	@if [ -d static ]; then
		echo "Clean static build" 
		rm -Rf static 
	fi
endef

define _clean_pxt_steami
	@if [ -d pxt-steami/built ]; then
		echo "Clean pxt-steami build" 

		if ! [ -x "$(PXT)" ]; then
			echo "pxt not found ! \n Manual cleanning"
			rm -Rf pxt-steami/built
			rm -Rf pxt-steami/libs/core/built
			rm -Rf pxt-steami/libs/blocksprj/built
			exit 0
		else
			echo "pxt found ! \n Automatic cleanning"
			cd pxt-steami || exit
			pxt clean
		fi
	fi
endef

define _clean_pxt_core
	@if [ -d pxt/built ]; then 
		echo "Clean pxt-core build" 
		rm -Rf pxt/built; 
	fi
endef

.PHONY : all
all : setup

.PHONY : setup
setup : | _deepclean install-makecode-steami install-pxt install-pxt-common-packages install-pxt-steami install-pxt-steami-backend

.PHONY : install-makecode-steami
install-makecode-steami : node_modules/.package-lock.json package-lock.json

.PHONY : install-pxt
install-pxt : pxt/node_modules/.package-lock.json pxt/package-lock.json 

.PHONY : install-pxt-common-packages
install-pxt-common-packages : pxt-common-packages/node_modules/.package-lock.json pxt-common-packages/package-lock.json

.PHONY : install-pxt-steami
install-pxt-steami : pxt-steami/node_modules/.package-lock.json pxt-steami/package-lock.json

.PHONY : install-pxt-steami-backend
install-pxt-steami-backend : pxt-steami-backend/node_modules/.package-lock.json pxt-steami-backend/package-lock.json

$(PXT) : pxt/built/target.json pxt-common-packages/node_modules/.package-lock.json

node_modules/.package-lock.json package-lock.json $(PXT): package.json
	@$(call install_node_package,$(<D))

pxt/node_modules/.package-lock.json pxt/package-lock.json : pxt/package.json 
	@$(call install_node_package,$(<D))

pxt-common-packages/node_modules/.package-lock.json pxt-common-packages/package-lock.json: pxt-common-packages/package.json pxt/built/target.json
	@$(call install_node_package,$(<D))

pxt-steami/node_modules/.package-lock.json pxt-steami/package-lock.json: pxt-steami/package.json pxt/built/target.json
	@$(call install_node_package,$(<D))

pxt-steami-backend/node_modules/.package-lock.json pxt-steami-backend/package-lock.json : pxt-steami-backend/package.json
	@$(call install_node_package,$(<D))

pxt/built/target.json : pxt/node_modules/.package-lock.json
	cd pxt || exit 
	npm run build

.PHONY : clean
clean : 
	@$(call _clean_static)
	@$(call _clean_pxt_steami)
	@$(call _clean_pxt_core)

.PHONY : _deepclean
_deepclean : _clean _deepclean_pxt_core _deepclean_pxt_common_packages _deepclean_pxt_steami _deepclean_pxt_steami_backend _deepclean_makecode_steami

.PHONY : _deepclean_pxt_core
_deepclean_pxt_core:
	@$(call deepclean_node_package,pxt)

.PHONY : _deepclean_pxt_common_packages
_deepclean_pxt_common_packages:
	@$(call deepclean_node_package,pxt-common-packages)

.PHONY : _deepclean_pxt_steami
_deepclean_pxt_steami:
	@$(call deepclean_node_package,pxt-steami)

.PHONY : _deepclean_pxt_steami_backend
_deepclean_pxt_steami_backend:
	@$(call deepclean_node_package,pxt-steami-backend)


.PHONY : _deepclean_makecode_steami
_deepclean_makecode_steami:
	@$(call deepclean_node_package,.)

.PHONY : build
build : $(PXT)
	@$(call pxt_command,buildtarget)

.PHONY : ci
ci : $(PXT)
	@$(call pxt_command,ci)

.PHONY : serve
serve : $(PXT)
	@$(call pxt_command,serve --no-browser --no-serial -h '0.0.0.0')

.PHONY : package
package : static/target.json

static/target.json : $(PXT)
	@$(call pxt_command,staticpkg -o ../static/)

.PHONY : staticserve
staticserve : static/target.json pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/node_modules/.package-lock.json
	nodemon pxt-steami-backend/server.js

.PHONY : localcertificates
localcertificates: pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/https/rootCA.pem

pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/https/rootCA.pem &:
	export CAROOT=$(PWD)/pxt-steami-backend/https
	mkcert -install 
	mkcert -cert-file pxt-steami-backend/https/fastify.cert -key-file pxt-steami-backend/https/fastify.key 'makecode.local' localhost 127.0.0.1 ::1

.SILENT: install_cert_for_local_dev
.PHONY : install_cert_for_local_dev
install_cert_for_local_dev : pxt-steami-backend/https/rootCA.pem
	if [ -f /.dockerenv ]; then 
		echo "This rule work only for the host system"
	else
		sudo cp pxt-steami-backend/https/rootCA.pem /usr/local/share/ca-certificates/rootCA.crt
		sudo update-ca-certificates
		sudo sh -c "echo 127.0.0.1 makecode.local>>/etc/hosts"
	fi