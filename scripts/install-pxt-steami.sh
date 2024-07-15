#!/usr/bin/env sh

install_pxt_steami() {
    cd pxt-steami || exit
    npm install --link
    npm run build
    cd ..
}

install_pxt_steami