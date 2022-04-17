FROM nginx:1.21.6-alpine

WORKDIR /app/public

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./public/* /app/public/
