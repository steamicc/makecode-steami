#!/usr/bin/env sh

deep_clean() {
    cd pxt-steami || exit
    pxt clean
    cd ..
    rm -Rf pxt/node_modules
    rm -Rf pxt-common-packages/node_modules
    rm -Rf pxt-steami/node_modules
    
    rm -f package-lock.json
    rm -f pxt/package-lock.json
    rm -f pxt-common-packages/package-lock.json
    rm -f pxt-steami/package-lock.json
}

deep_clean
