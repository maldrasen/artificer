#!/bin/bash

packages=(database)

echo ""
echo "=== Running Specs ==="
echo ""

for package in "${packages[@]}"
do
  if [ $1 = "--coverage" ]
  then
    yarn run nyc --reporter=html mocha packages/$package/spec/**/*-spec.js --name $package --verbose
  else
    yarn run mocha packages/$package/spec/**/*-spec.js --name $package $1
  fi
done
