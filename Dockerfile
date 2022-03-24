FROM alpine:3.14

WORKDIR /usr/src/server

# Copy files
COPY . /usr/src/server/

RUN sed -i s/https/http/ /etc/apk/repositories && \
    apk update && \
    apk add --no-cache nodejs npm && \
    rm -rf /var/apk/cache/* && \
    npm ci && \
    npm run prebuild && \
    npm run build

EXPOSE 3000
CMD [ "npm", "run", "serve" ]
