#!/bin/bash

# remove existing builds
rm -rf dist/build

# build
./node_modules/.bin/ng-packagr -p ng-package.json

# delete unwanted folders
rm -rf .ng_build
rm -rf .ng_pkg_build
