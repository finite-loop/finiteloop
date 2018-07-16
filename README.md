# Finiteloop Site V2

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

```sh
cd finiteloop-systems-v2

# Dev Environment

docker run --rm -it -p 8000:8000 -v $(pwd)/site:/site partha360/finiteloop-v2 develop

# Production Build

docker run --rm -it -v $(pwd)/site:/site partha360/finiteloop-v2 build

#Staging Environment

docker run --rm -it -p 8000:8000 -v $(pwd)/site:/site partha360/finiteloop-v2 stage #
```

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/finite-loop/finiteloop-systems-v2)
