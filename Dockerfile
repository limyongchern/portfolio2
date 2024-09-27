# build the images
FROM node:slim
WORKDIR /app
COPY . /app/
RUN npm i
ARG NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}
ARG NEXT_PUBLIC_API_KEY=${NEXT_PUBLIC_PUBLIC_KEY}
RUN npm run build
EXPOSE 3000
CMD npm run start
