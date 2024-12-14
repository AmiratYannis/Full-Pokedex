FROM node
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3030
CMD ["npm","start"]