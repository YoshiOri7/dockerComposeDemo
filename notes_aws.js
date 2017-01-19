// ==================================================================
// Launch a Linux Virtual Machine
// https://aws.amazon.com/getting-started/tutorials/launch-a-virtual-machine/

// Step 1: Launch an Amazon EC2 Instance
// Step 2: Configure your Instance
  Save your key pair in .ssh sub-directory (ex. ~/.ssh/MyKeyPair.pem).
// Step 3: Connect to your Instance
  // chmod command to hide your private key file
  chmod 400 ~/.ssh/mykeypair.pem
  // ssh into EC2
  ssh -i ~/.ssh/MyKeyPair.pem ec2-user@{IP_Address}

// ==================================================================
// Installing Docker on an Amazon Linux instance
// http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html

// Update the installed packages and package cache on your instance
sudo yum update -y
// Install Docker.
sudo yum install -y docker

// Start the Docker service.
sudo service docker start

// Add the ec2-user to the docker group so you can execute Docker commands without using sudo.
sudo usermod -a -G docker ec2-user

// Log out and log back in again to pick up the new docker group permissions.
exit

// Verify that the ec2-user can run Docker commands without sudo.
docker info

// ==================================================================
// Create a Docker Image and Upload it
// Install git.
sudo yum install -y git

// Clone down repo from GitHub (Or pull down docker images from your dockerHub)
git clone https://github.com/YoshiOri7/dockerComposeDemo.git

// cd into the app folder
cd dockerComposeDemo

// run docker-compose.yml to build containers
// installing docker-compose in Amazon EC2
// (Note: download the latest docker)
curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
// http://www.mattkimber.co.uk/setting-up-docker-and-docker-compose-on-aws/
// https://gist.github.com/hitsujiwool/81fcab49f9ccf8ac5835

// when docker-compose is isntalled, build containers
docker-compose up

// store/share compositions
// http://stackoverflow.com/questions/29826057/using-docker-compose-how-do-i-share-my-image-to-docker-hub




