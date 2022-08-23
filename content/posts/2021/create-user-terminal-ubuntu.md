---
title: "Create a New User from the terminal on Ubuntu"
description: "To create a new user from the terminal on Ubuntu follow along with this article."
date: 2021-11-28T14:00:00
url: /posts/create-user-terminal-ubuntu/
image: /images/2021/thumbnails/user-icon.png
categories:
  - Linux
tags:
  - Linux
  - Ubuntu
---

### Root User

Before you get started make sure you are in root user with the following command.

```sh
sudo sh
```

### Adding a New User

- Run the following command to create a new user.

```sh
adduser username
```

- You will be asked to enter a password for the user and confirm it and you will be asked to enter some details about the user you can either fill them or leave them empty.

![adduser](/images/2021/posts/create-user-terminal-ubuntu/add-user.png)

### Adding the User to the sudo Group

- Run the following command to add the user to the sudo group.

```sh
usermod -aG sudo username
```

![adduser](/images/2021/posts/create-user-terminal-ubuntu/usermod.png)

### Switching to the New User

- Run the following command to switch to the new user.

```sh
su username
```

![adduser](/images/2021/posts/create-user-terminal-ubuntu/switch-user.png)

### Testing sudo access

- To make sure that the user has sudo access run a command with sudo.

```sh
sudo apt update
```

![adduser](/images/2021/posts/create-user-terminal-ubuntu/test-sudo-access.png)
