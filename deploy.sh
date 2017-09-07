#!/usr/bin/env bash

. ./build.sh

aws lambda update-function-code \
--region us-east-1 \
--function-name doTheAqiThing \
--zip-file fileb://$PWD/$OUTPUT/$PACKAGE
