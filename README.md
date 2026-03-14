# ENCT_API


# criar o volume
# sudo docker volume create certificados

# criar rede
## docker network create ip6ne

# build
# docker build -t api.v1 .


# docker run --network ip6ne -p 65311:65311 -d --name api.v1 api.v1 

# docker run --network ip6ne -it api.v1 /bin/sh