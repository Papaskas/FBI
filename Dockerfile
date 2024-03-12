FROM node:20.10 AS dist

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.25.4 AS prod

RUN rm -rf /usr/share/nginx/html/*

COPY --from=dist /app/dist/fbi/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
