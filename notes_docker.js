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

// docker compose ----------------------
// configure docker-compose.yml
// run docker-compose.yml to build containers
docker-compose up
docker-compose up --build
--build // a clean build of our images.

// delete docker
docker-compose rm -v
docker volume ls -f dangling=true

// docker cleanup ----------------------
// http://blog.yohanliyanage.com/2015/05/docker-clean-up-after-yourself/
// clean up
docker rm -v $(docker ps -a -q -f status=exited)
docker rmi $(docker images -f "dangling=true" -q)
docker volume rm $(docker volume ls -qf dangling=true)


// ==========================================
// issues with mysql
// sometimes, mysql will not allow access from a remote host
// you may need to configure your mysql instance to allow remote access
// http://serverfault.com/questions/793058/can-not-access-mysql-docker/806021
// access to mysql container

docker exec -ti <mysql-container-id> /bin/bash
mysql mysql
mysql> SELECT host,user FROM user;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'dockerDemo';

show databases;
CREATE DATABASE IF NOT EXISTS dockerDemo;

