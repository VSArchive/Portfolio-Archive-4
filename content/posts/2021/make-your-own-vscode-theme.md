---
title: "Make your own vscode theme from scratch"
description: "To make a vscode theme you first need to install nodejs and npm before you get started. and also make sure you have vscode installed"
date: 2021-11-26T10:00:00
url: /posts/make-your-own-vscode-theme/
image: /images/thumbnails/vscode.png
categories:
  - vscode
tags:
  - vscode
  - theme
---

To make a [vscode](https://code.visualstudio.com) theme you first need to install nodejs and npm before you get started and also make sure you have [vscode](https://code.visualstudio.com) installed for obvious reasons.

NodeJs - [https://nodejs.org/en/](https://nodejs.org/en/)
vscode - [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Install yo

- After you install npm run the following command in your terminal.

```sh
npm install -g yo generator-code
```

![Install yo](/images/2021/make-your-own-vscode-theme/install-yo.png)

- This installs yo and generate-code globally in your system

### Create theme

- After successfully installation run the following command to create a project

```sh
yo code
```

- You will be asked to select options how you want to create the theme and other questions make sure you fill them all correctly

![yo code](/images/2021/make-your-own-vscode-theme/yo-code-color-theme.png)

![yo code](/images/2021/make-your-own-vscode-theme/yo-code-theme-create-type.png)

![yo code](/images/2021/make-your-own-vscode-theme/yo-code-finish.png)

### Edit theme

- After you finished it will open the created project in [vscode](https://code.visualstudio.com).

![vscode](/images/2021/make-your-own-vscode-theme/theme-folder.png)

- Press F5 on your keyboard and it will open a debug window where you can test the theme.

![vscode debug window](/images/2021/make-your-own-vscode-theme/debug-window-no-theme.png)

- In [vscode](https://code.visualstudio.com) open the JSON file named **your theme name**-color-theme.json under the themes folder.

- [vscode](https://code.visualstudio.com) provides a color picker when you hover around the color box in front of the hex code it makes it easy to edit the theme.

- Edit the colors you want and save the file.

![vscode theme edit](/images/2021/make-your-own-vscode-theme/theme-code.png)

- The theme will instantly reflect in the debug window as soon as you save it.

![vscode debug window](/images/2021/make-your-own-vscode-theme/debug-window-theme.png)

Feel free to make whatever changes you want to make.

**Explore more at** - [https://code.visualstudio.com/docs/getstarted/themes](https://code.visualstudio.com/docs/getstarted/themes)
