#!/bin/bash

# publish to npm
npm publish --access public build/
npm run docs
