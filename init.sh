#!/usr/bin/bash

set -x #debug

VOLUME=$1
TARGET=$2
FRAME=$3
NAME=$4
#docker run -it --rm -v "$VOLUME":"$TARGET" node:alpine cd "$TARGET" &&  npx "$FRAME" --use-npm "$NAME"
#docker run -d --rm -v "$VOLUME":"$TARGET" node cd "$TARGET" &&  npm i "$FRAME" && npm "$FRAME" "$NAME"
#docker run -it --rm -v "$VOLUME":"$TARGET" node:alpine  npx "$FRAME" --use-npm "$NAME"
docker run -it --rm -v "$VOLUME":"$TARGET" node:alpine npm i

