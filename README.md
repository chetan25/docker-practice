## Docker Node

#### Build Image
> `docker build . `

#### alpine version in docker means the image is smallest possible to run basic functions

### To build image from custom file
> run  `docker build -f Dockerfile.dev .`
- `-f` tells we are using a custom file.
- `.` the dot at the end means the build context(current directory)
  

#### Copy Command
> `Copy path-to-local-file-system path-to-copy-stuff-in-container`
> eg - `COPY ./ ./` will copy everything from current directory to container

#### To tag Image
> `docker build -t <dockerId>/<imageName> .`
> eg ` docker build -t chetan/nodeApp .`
>  To run the tag image `docker run chetan/nodeApp`

#### Port mapping 
> `docker run -p incomingPort : containerPort imageId`
> example `docker run -p 8080 : 8080 chetan/nodeapp`

#### To start the image in interactive mode 
> `docker run -it chetan/nodeapp`

#### To override the default command with image name, while starting a image
> `docker run -it chetan/nodeapp <command we need to run>`
> eg `docker run -it chetan/nodeapp sh`

#### To run command in running container with container Id
> `docker exec -it <containerId> <command we need to run>`
> eg `docker exec -it 21212121 sh`


#### Working directory
> `WORKDIR <folder>`
> any command will run relative to this path in container
> eg `WORKDIR /user/app`

#### To see running containers
> `docker ps`


#### IF React App Exits Immediately with Docker Run Command
> run `docker run -it -p 3000:3000 IMAGE_ID`


#### Create Docker Volumes to map folders for live reloads
> Copy command creates a snapshot of the folders in the container, while volumes creates references.

> run `docker run -p 3000:3000 -v /app/node_modules -v ${pwd}:/app <image_id>` 
 The above command says except node_module, reference everything inside container to the current directory.



# Docker Compose
To make networking between container easy.

#### to run image
> `docker-compose up`


#### to build and run an image
> `docker-compose up --build`


#### To start container in background
> to start  `docker-compose up -d`
> to stop `docker-compose down`

#### To run docker compose container in interactive mode
> add ` stdin_open: true # docker run -i`
> add  `tty: true    # docker run -t `


#### To map volumes for reload 
```
 volumes: 
    - /app/node_modules    -> this says don't map node modules, use it from the container
    - .:/app    ---> this says map all content in current folder to conetnt under /app
```


#### To run test in a running container
> get the Id of the running container, we started with docker-compose up
> to attach and run test run ` docker exec -it <container-id> npm run test`
> this is make the test live reload on any changes


