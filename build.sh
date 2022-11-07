#!/usr/bin/env bash

set -e
git clean -xfd
rm -rf node_modules output npm-shrinkwrap.json
BUILD_PATH=build
source ~/.nvm/nvm.sh

# export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
# export PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org
# export http_proxy=http://10.20.47.147:3128 https_proxy=http://10.20.47.147:3128
nvm install v16
nvm use v16

npm install -g yarn 
yarn --version
yarn cache clean
yarn install 

echo 'build'

yarn build 

# 读取退出码
BUILD_EXIT=$?
if [ $BUILD_EXIT -eq 0 ]
then
    echo 'build success'
else
    echo 'build error'
    exit $BUILD_EXIT
fi
# 清理多余文件
rm -rf ./node_modules

mkdir output
cp -R build/* output/
