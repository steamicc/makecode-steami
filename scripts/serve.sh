#!/usr/bin/env sh

serve() {
    cd pxt-steami || exit
    PXT_FORCE_LOCAL=1 PXT_RUNTIME_DEV=1 PXT_ASMDEBUG=1 PXT_NODOCKER=1 pxt serve --no-browser --no-serial -h '0.0.0.0'
    cd ..
}

serve
