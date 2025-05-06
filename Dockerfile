# build the images
FROM node:slim
WORKDIR /app
COPY . /app/
RUN npm i
RUN npm run build
EXPOSE 3000
CMD npm run start
