.ONESHELL: # Applies to every targets in the file!

export PATH := $(shell pwd)/node_modules/.bin:$(PATH)

export PXT_FORCE_LOCAL := 1 
export PXT_RUNTIME_DEV := 1 
export PXT_ASMDEBUG := 1 
export PXT_NODOCKER := 1 

.PHONY : all
all : setup

.PHONY : setup
setup : | install _deepclean install-pxt install-pxt-common-packages install-pxt-steami

.PHONY : install
install : node_modules

.PHONY : install-pxt
install-pxt : pxt/node_modules

.PHONY : install-pxt-common-packages
install-pxt-common-packages : pxt-common-packages/node_modules

.PHONY : install-pxt-steami
install-pxt-steami : pxt-steami/node_modules

.PHONY : clean
clean : | _clean

node_modules: package.json
	npm install

pxt/node_modules : pxt/package.json
	cd pxt || exit
	npm install
	npm run build

pxt-common-packages/node_modules : pxt-common-packages/package.json
	cd pxt-common-packages || exit
	npm install

pxt-steami/node_modules : pxt-steami/package.json
	cd pxt-steami || exit
	npm install --link

.PHONY : _clean
_clean :
	rm -Rf static
	cd pxt-steami || exit
	pxt clean

.PHONY : _deepclean
_deepclean : _clean
	rm -Rf pxt/node_modules
	rm -Rf pxt-common-packages/node_modules
	rm -Rf pxt-steami/node_modules
	rm -f package-lock.json
	rm -f pxt/package-lock.json
	rm -f pxt-common-packages/package-lock.json
	rm -f pxt-steami/package-lock.json

.PHONY : build
build :
	cd pxt-steami || exit
	pxt buildtarget

.PHONY : serve
serve :
	cd pxt-steami || exit
	pxt serve --no-browser --no-serial -h '0.0.0.0'

.PHONY : package
package :
	cd pxt-steami || exit
	pxt staticpkg -o ../static/

static/target.json : package

.PHONY : staticserve
staticserve : static/target.json
	http-server -c-1 static
