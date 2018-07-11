FROM node:8.11.3-alpine

EXPOSE 8000

RUN apk add vips-dev fftw-dev --update-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/

RUN apk --no-cache add -t .build-deps \
    gcc \
    libc-dev\
    make \
    bash \
    libpng-dev \
    g++ \
    git && \
    python && \
    rm -rf /var/cache/apk/*

RUN npm i npm@latest -g

RUN npm install --global gatsby-cli

RUN mkdir -p /site
WORKDIR /site
VOLUME /site

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT [ "/docker-entrypoint.sh" ]