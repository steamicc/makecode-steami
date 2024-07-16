#!/usr/bin/env sh
# Package into static website and test locally. See https://makecode.com/cli/staticpkg

package() {
    # Package and test locally
    # cd ../pxt; npm run build
    cd pxt-steami || exit
    PXT_FORCE_LOCAL=1 PXT_RUNTIME_DEV=1 PXT_ASMDEBUG=1 PXT_NODOCKER=1 pxt staticpkg
    cd ..
}

package
