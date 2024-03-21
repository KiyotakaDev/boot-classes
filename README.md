# Docker

Here I'm going to show the commnads used for docker.

Since docker is based on linux we can access native applications such as bash and linux commands

```bash
  # Check docker
  docker run hello-world

  # Image download
  docker pull postgres

  # Show images
  docker images 

  # Start postgres instance
  # options: name, port, dbname
  docker run --name testdb -p 5173:3306 -e POSTGRES_PASSWORD=mypasswd123 postgres

  # Execute connection to postgres db
  # options: interactive, user
  # psql -> postgres
  docker exec -it testdb psql -U postgres
```

## Image

An image it's like a template that gets the installer of a program.

## Container

A container is created from the image this gives us the possibility of running multiple times to create different instances of an application. (each container can have different user, port, password, etc.)

# Our program

Dockerfile -> image -> container

```bash
  # Build our project (creates image)
  docker build -t nodeProject .

  # Show images
  docker images # Must return our image "nodeProject"

  # Execute
  docker run --name server1 -p 5000:3000 nodeProject
```