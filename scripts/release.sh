#!/bin/bash

# publish to npm
npm publish --access public dist/build/
npm run docs
