FROM node:17.3.1 AS base
RUN npm i -g node-sass@7.0.1

WORKDIR /app
EXPOSE 8000
ENV NODE_ENV "dev"
COPY package*.json ./
COPY . ./
RUN ls -l


FROM base as dev
# FROM base as dev
# COPY package*.json ./app
# COPY . ./usr/src/app
# RUN ls -l
RUN npm install
# RUN ls -l app
# COPY node_modules ./app
# WORKDIR /app
RUN ls -l
CMD ["npm", "run", "dev"]

FROM base AS prod
COPY . ./
RUN npm run build
# CMD [ "npm" "start" ]
# ARG APP=/usr/src/app

# RUN apt-get update \
#     && apt-get install -y ca-certificates tzdata \
#     && rm -rf /var/lib/apt/lists/*

# ENV TZ-Etc/UTC \
#     && APP_USER=appuser

# RUN groupadd $APP_USER \
#     && useradd -g $APP_USER $APP_USER \
#     && mkdir -p ${APP}

# FROM initalize as prod
# WORKDIR /usr/src/app
# COPY --from=base
# CMD [ "npm", "start" ]