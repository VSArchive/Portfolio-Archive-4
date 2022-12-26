---
title: "Install Docker in Ubuntu Linux"
description: "Install Docker in Ubuntu Linux"
date: 2022-12-26T12:00:00
url: /posts/docker-install-ubuntu/
image: /images/2022/thumbnails/docker-ubuntu.png
categories:
  - Linux
tags:
  - Linux
  - Ubuntu
  - Docker
---

![docker ubuntu](/images/2022/thumbnails/docker-ubuntu.png)

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. [Docker](https://www.docker.com/) enables you to separate your applications from your infrastructure so you can deliver software quickly. With [Docker](https://www.docker.com/), you can manage your infrastructure in the same ways you manage your applications. In the following article you will know how to install docker in [Ubuntu](https://ubuntu.com/)

## Prerequisites

### Dependencies

- Update the system.

```bash
sudo apt update
```

- Install required dependencies

```bash
sudo apt install ca-certificates curl gnupg lsb-release
```

### Setup GPG Key

- Add official [docker](https://www.docker.com/) [GPG](https://gnupg.org/documentation/manuals/gnupg/) keys to your system
- Make keyrings folder

```bash
sudo mkdir -p /etc/apt/keyrings
```

- Add GPG keys to keyrings folder

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

### Setup Docker Repository

- Add [docker](https://www.docker.com/) download repository to your system

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## Install Docker

- Update the system.

```bash
sudo apt update
```

- Install [docker](https://www.docker.com/)

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## Post Install

- Add a [docker](https://www.docker.com/) to the user group to use the [docker](https://www.docker.com/) command without sudo

```bash
sudo usermod -aG docker $USER
```

## Other Operating Systems

- If you want to install Docker in other linux distributions checkout out the following links

- For [Debian](https://www.debian.org/) - [Install Docker in Debian Linux](/posts/docker-install-debian)
- For [Ubuntu](https://ubuntu.com/) - [Install Docker in Ubuntu Linux](/posts/docker-install-ubuntu)
- For [Fedora](https://getfedora.org/) - [Install Docker in Fedora Linux](/posts/docker-install-fedora)
