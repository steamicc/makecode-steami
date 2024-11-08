.DEFAULT_GOAL = default

default : build
all : setup build

.ONESHELL: # Applies to every targets

include env.mk
include commons.mk
include pxt.mk

# Setup commands
.PHONY: prepare
prepare:
	@echo "Install Git hooks"
	git config core.hooksPath .hooks

.PHONY: setup
setup: deepclean $(PXT) $(PXT_INSTALL_LIBRARIES) build-pxt-core
	@echo "Setup makecode-steami"

.PHONY : clean
clean : ;@$(call _clean)

.PHONY : clean-pxt-core
clean-pxt-core : ;@$(call _clean_pxt_core)

.PHONY : clean-pxt-common-packages
clean-pxt-common-packages : ;@$(call _clean_pxt_common_packages)

.PHONY : clean-local-certificates
clean-local-certificates : ;@$(call _clean_pxt_steami_backend_certificates)

.PHONY : deepclean
deepclean : ;@$(call _deepclean)

# Create make rule for each PXT command
$(foreach command,$(PXT_COMMANDS),$(eval $(call _call_pxt_command_template,$(command),$(command),$(PXT))))

# Create install rules for each pxt package
$(foreach target,$(PXT_LIBRARIES),$(eval $(call _install_node_package_template,$(target),$(target))))

.PHONY : install-makecode-steami
install-makecode-steami: node_modules/.package-lock.json package-lock.json
	
node_modules/.package-lock.json package-lock.json:
	@$(call install_node_package,.)

# Install pxt CLI
$(PXT) : install-makecode-steami

.NOTPARALLEL : $(PXT) setup

# Build pxt cli
pxt/built/target.json : pxt/node_modules/.package-lock.json
	@echo "Build pxt core"
	@$(call _build_pxt_core)

.PHONY : build-pxt-core 
build-pxt-core : install-pxt
	@echo "Building pxt core ..."
	$(call _build_pxt_core)
	@echo "pxt core built"


# Create build rule by aliasing pxt buildtarget command
.PHONY : build
build : buildtarget

# Create package rule by aliasing pxt staticpkg command
.PHONY : package
package : staticpkg

static/target.json : staticpkg

.PHONY : staticserve
staticserve : static/target.json pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/node_modules/.package-lock.json
	@echo "Serve static editor"
	nodemon pxt-steami-backend/server.js

.PHONY : localcertificates
localcertificates: pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/https/rootCA.pem

.PHONY : install-cert-for-local-dev
install-cert-for-local-dev : localcertificates
	@$(call _install_cert_for_local_dev)

pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key pxt-steami-backend/https/rootCA.pem & : ;@$(call _generate_localcertificates)

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

