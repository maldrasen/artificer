#!/bin/bash

# OK, this kind of sucks. When running Sqlite3 with Electron it needs to be built with Electron as the target. However,
# Mocha expects the Sqlite3 binding to be build for Node. There doesn't seem to be any way for NPM to install multiple
# Sqlite3 bindings. So in order for Sqlite3 to work with both Mocha and Electron, we first run the default NPM install,
# which should install the Node bindings if everything is working correctly with Gyp. We copy those bindings out to the
# root directory. We then run the Electron specific Sqlite3 install, then copy the Node bindings back in. This seems to
# work fine, for now. No idea how this will effect the packaged versions of the application.

rm -rf ./node_modules

npm install
mv node_modules/sqlite3/lib/binding/node-v64-win32-x64 .sqlite3-binding-temp

npm install --build-from-source --runtime=electron --target=6.0.9 --dist-url=https://atom.io/download/electron sqlite3
mv .sqlite3-binding-temp node_modules/sqlite3/lib/binding/node-v64-win32-x64
