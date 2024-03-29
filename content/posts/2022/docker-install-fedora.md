---
title: "Install Docker in Fedora Linux"
description: "Install Docker in Fedora Linux"
date: 2022-12-26T12:00:00
url: /posts/docker-install-fedora/
image: /images/2022/thumbnails/docker-fedora.png
categories:
  - Linux
tags:
  - Linux
  - Fedora
  - Docker
---

![docker fedora](/images/2022/thumbnails/docker-fedora.png)

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. [Docker](https://www.docker.com/) enables you to separate your applications from your infrastructure so you can deliver software quickly. With [Docker](https://www.docker.com/), you can manage your infrastructure in the same ways you manage your applications. In the following article, you will know how to install docker in [Fedora](https://getfedora.org/)

## Prerequisites

### Dependencies

- Update the system.

```bash
sudo dnf update
```

- Install required dependencies

```bash
sudo dnf -y install dnf-plugins-core
```

### Setup Docker Repository

- Add [docker](https://www.docker.com/) download repository to your system

```bash
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

## Install Docker

- Install [docker](https://www.docker.com/)

```bash
sudo dnf install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## Post Install

- Add a [docker](https://www.docker.com/) to the user group to use the docker command without sudo

```bash
sudo usermod -aG docker $USER
```

## Other Operating Systems

- If you want to install Docker in other linux distributions check out the following links

- For [Debian](https://www.debian.org/) - [Install Docker in Debian Linux](/posts/docker-install-debian)
- For [Ubuntu](https://ubuntu.com/) - [Install Docker in Ubuntu Linux](/posts/docker-install-ubuntu)
- For [Fedora](https://getfedora.org/) - [Install Docker in Fedora Linux](/posts/docker-install-fedora)
