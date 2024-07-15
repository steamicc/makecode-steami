#!/usr/bin/env sh

clean() {
    cd pxt-steami || exit
    pxt clean
    cd ..
}

clean
