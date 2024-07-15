#!/usr/bin/env sh

install_pxt() {
    cd pxt || exit
    npm install
    cd ..
}

install_pxt