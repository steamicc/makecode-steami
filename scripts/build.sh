#!/usr/bin/env sh

build() {
    cd pxt-steami || exit
    PXT_FORCE_LOCAL=1 PXT_RUNTIME_DEV=1 PXT_ASMDEBUG=1 PXT_NODOCKER=1 pxt buildtarget
    cd ..
}

build
