#!/bin/bash -x
set -e

PROJECT_BIN=./node_modules/.bin
# Path to this plugin
PROTOC_GEN_TS_PATH="${PROJECT_BIN}/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/generated"

mkdir -p $OUT_DIR

rm -rf ${OUT_DIR}/*

"${PROJECT_BIN}/grpc_tools_node_protoc" \
--js_out=import_style=commonjs,binary:${OUT_DIR} \
--grpc_out=${OUT_DIR} \
--plugin=protoc-gen-grpc="${PROJECT_BIN}/grpc_tools_node_protoc_plugin" \
-I ./pb \
./pb/*

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="${OUT_DIR}" \
    -I ./pb \
    ./pb/*
