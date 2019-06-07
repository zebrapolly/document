FROM node:10.15.3

RUN npm install -g nodemon

WORKDIR /opt/api

RUN ls -l

CMD [ "npm", "run", "dev" ]