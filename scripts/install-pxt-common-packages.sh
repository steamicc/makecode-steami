#!/usr/bin/env sh

install_pxt_common_packages() {
    cd pxt-common-packages || exit
    npm install
    cd ..
}

install_pxt_common_packages