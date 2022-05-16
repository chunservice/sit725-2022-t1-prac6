from node:16-alpine

WORKDIR /app

COPY . .
# not to copy the dockerignore file
# not copying node module

EXPOSE 3000
# expose port 3000, because it is where the application running on

RUN npm install 
# install all the node modules inside the container

RUN cp .env.example .env
# copy .env.example to .env

CMD ["npm","start"]
# final command to run the image (when hosting the container)