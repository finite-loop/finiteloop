#!/bin/sh
set -e

export GATSBY_DIR="/site"
export PATH="$PATH:/usr/local/bin/gatsby"

# # Initialize Gatsby or run yarn
if [ ! -f "$GATSBY_DIR/package.json" ]
then
  echo "Initializing Gatsby..."
  gatsby new $GATSBY_DIR

else
  if [ ! -e "$GATSBY_DIR/node_modules/" ]
  then
    echo "Installing dependecies..."
    yarn
  fi
fi

# Decide what to do
if  [ "$1" = "develop" ]
then
  rm -rf $GATSBY_DIR/public
  yarn
  gatsby develop -H 0.0.0.0

elif  [ "$1" = "build" ]
then
  # rm -rf $GATSBY_DIR/public
  # rm -rf $GATSBY_DIR/node_modules
  yarn
  yarn build

elif  [ "$1" = "stage" ]
then
  # rm -rf $GATSBY_DIR/public
  # rm -rf $GATSBY_DIR/node_modules
  yarn
  yarn build
  gatsby serve --port 8000

else
  exec $@
fi