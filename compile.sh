#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf

conf='{"assetsRoot":"./assets/", "externals":{"d3": "d3"}}'


production(){
    echo "Production Mode";
    npm run build
    CONFIG=$conf NODE_ENV=production webpack -p 
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf webpack
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
