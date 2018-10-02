FROM node:10.11.0

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY src/ ./src
COPY .babelrc webpack.config.js ./
RUN yarn build
CMD yarn serve