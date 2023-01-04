---
title: "Install Portainer in docker Linux"
description: "Install Portainer in docker Linux"
date: 2023-01-04T12:00:00
url: /posts/install-portainer/
image: /images/2023/thumbnails/install-portainer.webp
categories:
  - Linux
tags:
  - Linux
  - Ubuntu
  - Docker
  - Portainer
---

![docker ubuntu](/images/2023/posts/install-portainer/portainer-logo.png)

[Portainer](https://www.portainer.io) hides the complexity of managing containers behind an easy-to-use UI. By removing the need to use the CLI, write [YAML](https://yaml.org/) or understand manifests, [Portainer](https://www.portainer.io) makes deploying apps and troubleshooting problems so easy that anyone can do it.

## Prerequisites

### Docker

- If you haven't installed docker follow this [article](https://vineelsai.com/posts/docker-install-ubuntu) and install docker

## Install Portainer

- Create docker volume for portainer

```sh
docker volume create portainer_data
```

![Create docker volume](/images/2023/posts/install-portainer/create-docker-volume.png)

- Run the following command to download and run the portainer docker container.

```sh
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

![Portainer Docker](/images/2023/posts/install-portainer/portainer-run.png)

- Now go to https:meachine-ip:9443 and click advanced procied to unsafe and you get to auth page and create a password and click on create user.

![Portainer Docker](/images/2023/posts/install-portainer/portainer-unsecure.png)

![Portainer Docker](/images/2023/posts/install-portainer/portainer-auth.png)

- Now you will be in the getting started page click on get started to reach portainer home page and select your environment.

![Portainer Docker](/images/2023/posts/install-portainer/portainer-getstarted.png)

![Portainer Docker](/images/2023/posts/install-portainer/portainer-home.png)

![Portainer Docker](/images/2023/posts/install-portainer/portainer-dashboard.png)

- Click on containers tab and click on add container to get started with portainer.

![Portainer Docker](/images/2023/posts/install-portainer/portainer-containers.png)
