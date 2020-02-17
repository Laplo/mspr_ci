FROM node:12.14.1-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

# install and cache app dependencies
COPY . .
RUN npm install --prod

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
