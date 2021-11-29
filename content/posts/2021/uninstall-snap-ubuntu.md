---
title: "Uninstall Snap in Ubuntu"

date: 2021-11-27T14:00:00
url: /posts/uninstall-snap-ubuntu/
image: /images/thumbnails/snapcraft-logo-bird.png
categories:
  - Linux
tags:
  - Linux
  - Snap
  - Ubuntu
---

Snap is a packaging format made by canonical to use in [Ubuntu](https://ubuntu.com) and other linux distros but there are problems with snaps as they are slow compared to native binaries and consume a lot of disk space and the server side of [snapcraft](https://snapcraft.io) is proprietary, but since its their own technology canonical is pushing it too much over other solutions in [Ubuntu](https://ubuntu.com), so for any of the following reasons if you want to uninstall snaps from your system just follow along.

### Uninstall Snaps

- Run the following command to list all snaps in your system.

```sh
snap list
```

![snap list](/images/2021/uninstall-snap-ubuntu/snap-list.png)

- Then remove snaps one by one by using the following command

```sh
sudo snap remove --purge snap-name
```

![snap remove](/images/2021/uninstall-snap-ubuntu/snap-remove.png)

### Uninstall snapd

- After removing snaps you can completely remove snap by using the following command

```sh
sudo apt remove --purge snapd
```

![remove snapd](/images/2021/uninstall-snap-ubuntu/remove-snapd.png)

### Delete snap cache

- Run the following commands to remove any snap configuration or cache files.

```sh
sudo rm -rf /var/cache/snapd/
rm -fr ~/snap # for home user
sudo rm -fr ~/snap # for root user
```

![remove snap cache](/images/2021/uninstall-snap-ubuntu/remove-snap-cache.png)

### Hold snap package

- Run the following command to prevent snap from auto installing, for example while installing chromium package.

```sh
sudo apt-mark hold snapd
```

![hold snap](/images/2021/uninstall-snap-ubuntu/hold-snap.png)
