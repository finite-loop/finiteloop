FROM node:8.11.3

EXPOSE 8000

# RUN apk add vips-dev fftw-dev --update-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/

# RUN apk --no-cache add -t .build-deps \
#     gcc \
#     libc-dev\
#     make \
#     bash \
#     libpng-dev \
#     g++ \
#     git && \
#     python && \
#     rm -rf /var/cache/apk/*

# RUN apk add --no-cache curl && curl -o- -L https://yarnpkg.com/install.sh | sh
ENV PATH /root/.yarn/bin:$PATH

# Upgrade yarn to latest
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

RUN yarn -v

RUN yarn global add gatsby-cli

RUN mkdir -p /site
WORKDIR /site
VOLUME /site

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT [ "/docker-entrypoint.sh" ]