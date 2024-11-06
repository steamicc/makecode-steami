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
PXT_SERVE_ARGS ?= --no-browser --no-serial -h '0.0.0.0'
PXT_STATICPKG_ARGS ?= -o ../static/ --localbuild
PXT_TAG_ARGS ?=
PXT_TESTGHPKGS_ARGS ?= 
PXT_UPDATE_ARGS ?= 
PXT_USEDBLOCKS_ARGS ?= 

PXT="/workspaces/makecode-steami/node_modules/.bin/pxt"

define pxt_command
	echo "PXT = $(PXT)"
	echo "Call pxt $1"
	if ! [ -x $(PXT) ]; then \
		echo "pxt is not installed! Please run make setup first"; \
		exit 1; \
	fi
	cd pxt-steami || exit 1
	pxt $1
	
endef

define _call_pxt_command_template
.PHONY: $1

$1: $3
	@$$(call pxt_command,$2 $$(PXT_$(shell echo $2 | tr '[:lower:]' '[:upper:]')_ARGS))

endef

# Install targets
define _install_node_package_template
.PHONY: install-$1

install-$1: $2/node_modules/.package-lock.json $2/package-lock.json

$2/node_modules/.package-lock.json $2/package-lock.json: $2/package.json
	@$$(call install_node_package,$$(<D))

endef