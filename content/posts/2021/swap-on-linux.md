---
title: "Swap on Linux"
description: "Swap is a portion of the hard disk that is used by the operating system when to store temporary data when the system is running out of memory."
date: 2021-12-01T12:00:00
url: /posts/swap-on-linux/
image: /images/2021/thumbnails/ubuntu-logo.png
categories:
  - Linux
tags:
  - Linux
  - Ubuntu
---
 
Swap is a portion of the hard disk that is used by the operating system when to store temporary data when the system is running out of memory. It basically works as an extension of the RAM but the data is stored on a disk instead of RAM, but don't think it is a replacement for RAM because hard disk or even SSDs are much slower than RAM, so the swap is just to prevent the system from crashing if it runs out of memory.

### Checking the System for Swap

- Run the following command to see existing swap partitions.

```sh
sudo swapon --show
```

![swapon show](/images/2021/posts/swap-on-linux/swapon-show.png)

- If it returns nothing, then there is no swap on your system and you can create one even if you have swap and you want to increase the size of the swap you can follow along and copy paste the commands below this doesn't matter much.

### Creating a Swap File

- Run the following command to create a swap file of size 1GB.

```sh
sudo fallocate -l 1G /swapfile
```

![fallocate](/images/2021/posts/swap-on-linux/create-swap.png)

- You can replace the 1G with any size you want, it is recommended to use the size of your RAM if you have 8GB or less ram and half of your RAM if you have more than 8GB.

### Enabling the Swap File

- The following command will change the permissions of the swap file to be readable and writable by the root only.

```sh
sudo chmod 600 /swapfile
```

![chmod](/images/2021/posts/swap-on-linux/enable-swap.png)

- Then run the following command to mark the file as swap.

```sh
sudo mkswap /swapfile
```

![mkswap](/images/2021/posts/swap-on-linux/mkswap.png)

- Finally, run the following command to enable the swap file.

```sh
sudo swapon /swapfile
```

![swapon](/images/2021/posts/swap-on-linux/swapon.png)

- Now run the swapon --show command again to see if the swap file is created and enabled successfully.

```sh
sudo swapon --show
```

![swapon show](/images/2021/posts/swap-on-linux/swapon-show-swap.png)

### Making swap permanent

- Run the following command to enable swap on boot.

```sh
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

![show swappiness](/images/2021/posts/swap-on-linux/swappiness-60.png)

### Tuning the swappiness

- Swappiness is a value that determines how much memory is swapped out to disk. It is a value between 0 and 100.

- Run the following command to see the current swappiness value, it is usually set to 60.

```sh
cat /proc/sys/vm/swappiness
```

![show swappiness](/images/2021/posts/swap-on-linux/swappiness-60.png)

- It is not bad if you have a high speed SSD or SSD with a lot of cache, but if you have a slow HDD then it’s better to set the swappiness closer to 0(but not 0).

- Run this command to set the current swappiness to 10.

```sh
sudo sysctl vm.swappiness=10
```

![set swappiness](/images/2021/posts/swap-on-linux/vm-swappiness.png)

- And Edit the file /etc/sysctl.conf and add the following line at the bottom to make it persistent across reboots.

```sh
sudo nano /etc/sysctl.conf
```

```sh
vm.swappiness=10
```

![edit sysctl](/images/2021/posts/swap-on-linux/edit-sysctl.png)

- Press CTRL+X to exit nano and press Y to save the changes.
