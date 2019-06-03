FROM node
ARG PORT
ENV PORT $PORT
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8081
