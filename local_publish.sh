#!/bin/bash

npm run build &&
npm pack --pack-destination "$LOCAL_NPM"
