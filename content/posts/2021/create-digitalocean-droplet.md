---
title: "Create a DigitalOcean droplet"
description: "DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. This post will walk you through creating a droplet on DigitalOcean."
date: 2021-11-28T12:00:00
url: /posts/digitalocean-droplet/
image: /images/thumbnails/digitalocean-logo.png
categories:
  - Cloud
tags:
  - Cloud
  - DigitalOcean
---

[DigitalOcean](https://m.do.co/c/96aa4c93885e) Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

This guide assumes you already have a [DigitalOcean](https://m.do.co/c/96aa4c93885e) account, If not you can create one [here.](https://m.do.co/c/96aa4c93885e)

### Create a droplet

- Go to [DigitalOcean Project Dashboard](https://cloud.digitalocean.com/projects) and click on Get Started with a Droplet.

![DigitalOcean Project Dashboard](/images/2021/create-digitalocean-droplet/get-started.png)

- Then choose the image you want to use, in my case, I chose Ubuntu 20.04.

![Choose Image](/images/2021/create-digitalocean-droplet/choose-os.png)

- Then choose the size of the droplet you want to create, I am going with 1GB, $6/month droplet.

![Choose Plan](/images/2021/create-digitalocean-droplet/choose-plan.png)

- Then choose the region you want to create the droplet in, I am going to use Bangalore since it’s nearest to me.

![Choose Region](/images/2021/create-digitalocean-droplet/choose-region.png)

- Now enter a password for the droplet, don't lose it! You will need it later to connect to the droplet.

![Enter Password](/images/2021/create-digitalocean-droplet/enter-password.png)

- Then enter the hostname of the droplet, I am going to use ubuntu.

![Enter Host Name](/images/2021/create-digitalocean-droplet/enter-hostname.png)

- Finally, click on Create Droplet.

![Create Droplet](/images/2021/create-digitalocean-droplet/create-droplet.png)

- Now wait for the droplet to be created, this usually happens in under a minute.

![Wait](/images/2021/create-digitalocean-droplet/wait-for-creation.png)

### Connect to the droplet

- Once the droplet is created, copy the IP address of the droplet and open the terminal in Linux or PowerShell/CMD in windows and use the following command to connect to the droplet.

![Copy IP](/images/2021/create-digitalocean-droplet/droplet-ready.png)

```sh
ssh root@<IP ADDRESS>
```

- You will be asked to type "yes" to add the SSH key to the droplet and then you will be asked to enter the password for the droplet.

![SSH](/images/2021/create-digitalocean-droplet/ssh-connect.png)

- Now you are connected to the droplet and you can start doing things you want to do.
