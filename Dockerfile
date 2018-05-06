FROM node:9-slim

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /opt/gitdashboards

ADD . /opt/gitdashboards

RUN npm i && npm run build --production

RUN npm install -g serve

CMD serve -s build

EXPOSE 5000
