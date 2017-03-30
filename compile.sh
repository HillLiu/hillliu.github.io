#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf


production(){
    echo "Production Mode";
    npm run build
    CONFIG='{"assetsRoot":"./assets/", "webpackVendor": ["d3"]}' NODE_ENV=production webpack -p 
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG='{"assetsRoot":"./assets/", "webpackVendor": ["d3"]}' webpack
}

case "$1" in
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
