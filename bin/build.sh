#!/bin/bash
# Create prod build

node_modules/node-sass/bin/node-sass styles/application.scss --output assets/compiled
yarn run dist
dist/win-unpacked/artificer.exe
