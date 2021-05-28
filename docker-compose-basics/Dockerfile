FROM node:alpine

WORKDIR '/app'

# first just copy packae file to make sure we only rebuild if deps change
COPY package.json .
RUN npm install

# after building copy rest of the things
COPY . .

CMD ["npm", "start"]