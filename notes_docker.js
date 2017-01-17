// ==========================================
// REFERENCE:
// http://linkis.com/scotch.io/tutorials/7SZkK
// ==========================================

// ==========================================
Docker Commands:
Usage: docker [OPTIONS] COMMAND [arg...]

Commands:
build     Build an image from a Dockerfile
images    List images
port      List port mappings or a specific mapping for the container
stop      Stop one or more running containers

docker ps -a // show all containers on the system

docker rmi  <IMAGE ID> // to remove docker image
docker rm  <CONTAINER ID> // to remove docker container

docker stop <CONTAINER ID> // stops the container
docker start <CONTAINER ID> // strats the container

// ==========================================

// build an image ----------------------
// docker build -t <image_tag>:<tag> <directory_with_Dockerfile>
docker build -t server:dev .
-t // --tag name or tag given to the image
.  // current directory

// container ----------------------
// docker run -d --name <container_name> -p <host-port:exposed-port>  <image-name>
docker run -d --name serverContaier -p 3000:3000 server:dev
-d // run the container in detached mode
-p // port our host-port -> docker container

// dokcker dompose ----------------------
// configure docker-compose.yml
// run docker-compose.yml to build containers
docker-compose up
docker-compose up --build
--build // a clean build of our images.
