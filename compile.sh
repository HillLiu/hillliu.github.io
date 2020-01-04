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

startServer(){
    yarn
    if [ -z "$port" ] ; then
        port=3000;
    fi
    echo "Start server";
    node_modules/.bin/ws -p $port -v 
}

case "$1" in
  p)
    production
    ;;
  s)
    startServer 
    ;;
  *)
    develop
    exit
esac

exit $?
