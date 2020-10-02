#!/bin/bash

packages=(database engine)
# packages=(engine)

echo ""
echo "=== Running Specs ==="
echo ""

for package in "${packages[@]}"
do
  if [ $1 = "--coverage" ]
  then
    ./node_modules/.bin/nyc --reporter=html mocha packages/$package/spec/**/*-spec.js --name $package --verbose
  else
    ./node_modules/.bin/mocha packages/$package/spec/**/*-spec.js --name $package $1
  fi
done
