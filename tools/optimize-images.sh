#!/usr/bin/env bash

set -euo pipefail

INPUT_DIR="${1:-}"

if [[ -z "$INPUT_DIR" ]]; then
    echo "Usage: $0 <image-directory>"
    exit 1
fi

if [[ ! -d "$INPUT_DIR" ]]; then
    echo "Error: directory does not exist: $INPUT_DIR"
    exit 1
fi

INPUT_DIR="$(cd "$INPUT_DIR" && pwd)"
OUTPUT_DIR="$INPUT_DIR/optimized"

mkdir -p "$OUTPUT_DIR"

echo "Input:  $INPUT_DIR"
echo "Output: $OUTPUT_DIR"
echo

find "$INPUT_DIR" \
    -type f \
    \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
    -not -path "$OUTPUT_DIR/*" \
    -print0 |
while IFS= read -r -d '' FILE; do

    RELATIVE="${FILE#$INPUT_DIR/}"
    DIRNAME="$(dirname "$RELATIVE")"
    BASENAME="$(basename "$RELATIVE")"
    NAME="${BASENAME%.*}"

    TARGET_DIR="$OUTPUT_DIR/$DIRNAME"

    mkdir -p "$TARGET_DIR"

    echo "Optimizing: $RELATIVE"

    # WebP
    squoosh-cli \
        "$FILE" \
        --webp '{"quality":80}' \
        -d "$TARGET_DIR"

    # AVIF
    squoosh-cli \
        "$FILE" \
        --avif '{"cqLevel":30}' \
        -d "$TARGET_DIR"

done

echo
echo "Done!"
echo "Optimized images are in:"
echo "$OUTPUT_DIR"
