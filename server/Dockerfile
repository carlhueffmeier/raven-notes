FROM mhart/alpine-node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 443
CMD [ "npm", "start" ]