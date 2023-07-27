FROM  registry_pontua/pontua/nodejs18

WORKDIR /usr/server/app

COPY "package.json" ./

RUN npm install -g npm@latest
RUN npm install

RUN npm ci --production && npm cache clean --force

COPY --chown=node:node . /usr/server/app

RUN npm run build

EXPOSE 8082

ENV PORT=8082

CMD ["npm", "start"]