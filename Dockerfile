FROM node
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3050
CMD ["npm","start"]