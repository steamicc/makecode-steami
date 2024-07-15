#!/usr/bin/env sh

staticserve() {
    cd pxt-steami || exit
    http-server -c-1 built/packaged    
    cd ..
}

staticserve
