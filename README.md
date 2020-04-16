# Finiteloop Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/68f17afa-c0c0-44e5-a395-0d943ecf9ec4/deploy-status)](https://app.netlify.com/sites/finiteloop/deploys)

This is version 2 of Finiteloop site using gatsbjs v2

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://next.gatsbyjs.org/docs/building-with-components/).

## Local Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
    *or*
yarn global add gatsby-cli
```

Then you can run it by:

```sh
cd finiteloop-systems-v2
gatsby develop
```

## Using Docker

https://hub.docker.com/r/finitelooplabs/website

```sh
git clone https://github.com/finite-loop/finiteloop.git (https)

    or

git clone git@github.com:finite-loop/finiteloop.git (ssh)

cd finiteloop

# Dev Environment

docker run --rm -p 8000:8000 -it -v $(pwd):/site finitelooplabs/website develop

# Production Build

docker run --rm -p 8000:8000 -it -v $(pwd):/site finitelooplabs/website build

#Staging Environment

docker run --rm -p 8000:8000 -it -v $(pwd):/site finitelooplabs/website stage
```

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/finite-loop/finiteloop)
