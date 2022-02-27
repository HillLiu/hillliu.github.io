#!/bin/sh
DIR="$( cd "$(dirname "$0")" ; pwd -P )"

conf='{'
conf+='"assetsRoot":"/assets/",'
conf+='"swDest":"'${DIR}/service-worker.js'",'
conf+='"devPort": "'${hotPort:-8080}'"'
conf+='}'

webpack='npm run webpack --'


production(){
    echo "Production Mode";
    npm run build
    CONFIG=$conf NODE_ENV=production $webpack
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf $webpack
}

startServer(){
    yarn
    if [ -z "$port" ] ; then
        port=3000;
    fi
    echo "Start server";
    npm run start -- -p $port -v
}

killBy(){
    ps auxwwww | grep $1 | grep -v grep | awk '{print $2}' | xargs -I{} kill -9 {}
}

stop(){
    killBy ${DIR}/node_modules/.bin/babel 
    cat webpack.pid | xargs -I{} kill -9 {}
    npm run clean
}

watch(){
    stop 
    echo "Watch Mode";
    npm run build:ui -- --watch &
    npm run build:src -- --watch &
    sleep 10 
    CONFIG=$conf $webpack --watch &
}

watchTest(){
    stop 
    echo "Watch Test";
    npm run build:test:ui -- --watch &
    npm run build:test:src -- --watch &
}

hot(){
    stop 
    echo "Hot Mode";
    npm run build:es:ui -- --watch &
    npm run build:es:src -- --watch &
    HOT_UPDATE=1 CONFIG=$conf $webpack serve &
}

case "$1" in
  p)
    production
    ;;
  s)
    startServer 
    ;;
  hot)
    hot
    ;;
  watch)
    watch 
    ;;
  watchTest)
    watchTest
    ;;
  stop)
    stop 
    ;;
  *)
    develop
    exit
esac

exit $?
