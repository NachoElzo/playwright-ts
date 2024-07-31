# Install Jenkins using Docker Compose

This repository contains a Docker Compose configuration for a quick installation of Jenkins, allowing jenkins using containers in the pipeline configuration.

[offical instructions](https://www.jenkins.io/doc/book/installing/docker/)

# Docker Installation

## Step 1

Install Docker locally

## Step 2

Clone this repository or download it's contents.

## Step 3

Open a terminal window inside you project and execute: (use same name than the image name in docker-compose file):

```
docker build -t my-jenkins .
```

## Step 3

Start Jenkins:

```
docker compose up -d
```

## Step 4

Open Jenkins by going to: [http://localhost:8080/](http://localhost:8080/)

## Step 5

Get the secret key from the jenkins container log to proceed the installation

## Step 6

Stop docker services

```
docker compose down
```

If you wish to start Jenkins again later, run the same comand from Step 3.

# step 7

Remove jenkins containers

```
docker compose down --volumes --rmi all
```
