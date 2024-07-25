.ONESHELL: # Applies to every targets in the file!

export PATH := $(shell pwd)/node_modules/.bin:$(PATH)

export PXT_FORCE_LOCAL := 1 
export PXT_RUNTIME_DEV := 1 
export PXT_ASMDEBUG := 1 
export PXT_NODOCKER := 1 

.PHONY : all
all : setup

.PHONY : setup
setup : | install _deepclean install-pxt install-pxt-common-packages install-pxt-steami install-pxt-steami-backend

.PHONY : install
install : node_modules

.PHONY : install-pxt
install-pxt : pxt/node_modules

.PHONY : install-pxt-common-packages
install-pxt-common-packages : pxt-common-packages/node_modules

.PHONY : install-pxt-steami
install-pxt-steami : pxt-steami/node_modules

.PHONY : install-pxt-steami-backend
install-pxt-steami-backend : pxt-steami-backend/node_modules

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

pxt-steami-backend/node_modules : pxt-steami-backend/package.json
	cd pxt-steami-backend || exit
	npm install

.PHONY : _clean
_clean :
	if [ -d static ]; then rm -Rf static; fi
	cd pxt-steami || exit
	if [ -d pxt-steami/buit ]; then pxt clean; fi

.PHONY : _deepclean
_deepclean : _clean
	rm -Rf pxt/node_modules
	rm -Rf pxt-common-packages/node_modules
	rm -Rf pxt-steami/node_modules
	rm -Rf pxt-steami-backend/node_modules

	rm -f package-lock.json
	rm -f pxt/package-lock.json
	rm -f pxt-common-packages/package-lock.json
	rm -f pxt-steami/package-lock.json
	rm -f pxt-steami-backend/package-lock.json


.PHONY : build
build :
	cd pxt-steami || exit
	pxt buildtarget

.PHONY : ci
ci :
	cd pxt-steami || exit
	pxt ci

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
staticserve : static/target.json pxt-steami-backend/https/fastify.cert pxt-steami-backend/https/fastify.key
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