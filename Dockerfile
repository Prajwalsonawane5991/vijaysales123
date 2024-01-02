From node:20
WORKDIR /app
COPY pacage.json /app
RUN npm install 
copy ./app
cmd node server.js