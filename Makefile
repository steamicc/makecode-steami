.PHONY : all
all : setup

setup : |install-pxt install-pxt-common-packages install-pxt-steami build

install-pxt : pxt/package-lock.json
pxt/package-lock.json:
	./scripts/install-pxt.sh

install-pxt-common-packages : pxt-common-packages/package-lock.json
pxt-common-packages/package-lock.json :
	./scripts/install-pxt-common-packages.sh

install-pxt-steami : pxt-steami/package-lock.json
pxt-steami/package-lock.json:
	./scripts/install-pxt-steami.sh

deepclean : |_deepclean setup
_deepclean :
	./scripts/deepclean.sh

clean : |_clean build
_clean :
	./scripts/clean.sh

build :
	./scripts/build.sh

serve :
	./scripts/serve.sh

pxt-steami/built/packaged :package
package :
	./scripts/package.sh

staticserve : pxt-steami/built/packaged
	./scripts/staticserve.sh
