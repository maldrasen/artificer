#!/bin/bash
# Create prod build

# Prebuild
cp env-prod.json env.json
node_modules/node-sass/bin/node-sass styles/application.scss --output assets/compiled

# Build
yarn run dist

# Cleanup
rm env.json

# Run
dist/win-unpacked/artificer.exe
