# build phase
FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install
COPY . .

RUN npm run build
 
# run phase
FROM nginx

# this copies the build directroy from app/build to nginx shared folder, --from=0 specifies the phase build(0)
COPY --from=0 /app/build /usr/share/nginx/html