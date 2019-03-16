#!/bin/bash -x
set -e

OUT_DIR="./src/generated"

./generate.sh

npm run build

cp -a $OUT_DIR ./dist/
