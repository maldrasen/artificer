#!/bin/bash
# npm install -g ddata
# npm install -g sloc

# Lines of code is a terrible signifier of progress, but it's something
# I like to watch.

echo
ddate
date
sloc client/ data/ engine/ spec/
