FROM node:17.3.1 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -g node-sass@7.0.1
EXPOSE 5050
COPY . .
CMD ["npm", "run", "dev"]