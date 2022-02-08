---
title: "Create AWS EC2 instance"
description: "EC2 is a part of AWS, that allows users to rent virtual computers on which to run your own applications. EC2 encourages scalable deployment of applications by providing a web service through which a user can boot a virtual machine, which Amazon calls an instance."
date: 2021-12-08T12:00:00
url: /posts/create-aws-ec2-instance/
image: /images/2021/thumbnails/ec2.jpg
categories:
  - Cloud
tags:
  - Cloud
  - AWS
---

EC2 is a part of AWS, that allows users to rent virtual computers on which to run your own applications. EC2 encourages scalable deployment of applications by providing a web service through which a user can boot a virtual machine, which Amazon calls an instance, containing any software desired. A user can create, launch, and terminate server-instances as needed, paying by the second for active servers

### AWS EC2

- Go to AWS console [https://console.aws.amazon.com/ec2/](https://console.aws.amazon.com/ec2/)

![AWS Console](/images/2021/posts/create-aws-ec2-instance/aws-console.png)

### Create a new EC2 instance

- Click on Create a new instance.

- Select the operating system for your EC2 instance.

![Choose Image](/images/2021/posts/create-aws-ec2-instance/choose-image.png)

- Select instance type, and click on Next. Be sure to select the right instance type; it costs more money to run a bigger instance, use the [AWS Calculator Page](https://calculator.aws/#/createCalculator/EC2) to find the right instance type for your project.

![Choose Instance Type](/images/2021/posts/create-aws-ec2-instance/choose-instance-type.png)

- On the Configure Instance Details page, make any configuration changes you want to make and click  Next. If you don't see what you want to change, just click  Next.

![Configure Instance Details](/images/2021/posts/create-aws-ec2-instance/choose-instance-details.png)

- On Add Storage page, type the amount of storage you want to add to your instance in the size column.

![Add Storage](/images/2021/posts/create-aws-ec2-instance/choose-storage.png)

- On Add Tags page, add tags for your instance, you can leave it empty and click Next.

![Add Tags](/images/2021/posts/create-aws-ec2-instance/choose-tags.png)

- On Configure Security Groups page, if you have a security group, select it. If you don't have a security group, click on Create a new security group and add rules to it to allow traffic to your instance. For example, you can allow traffic to port 80 and 443 for HTTP and HTTPS respectively, from any IP address if you are hosting a web server, or you can allow traffic to port 22 for SSH from any IP address if you want to be able to SSH into your instance. And click on Next.

![Configure Security Groups](/images/2021/posts/create-aws-ec2-instance/choose-network-type.png)

- On the Review page, you'll be asked to create a key pair. If you don't have a key pair, create one and click on Create Key Pair and give it a name and click on the Download button and save it carefully this is how you will be able to access your instance later, if you lose it you won't be able to access your instance.

- After the key pair is created, click on Launch Instance.

![Launch Instance](/images/2021/posts/create-aws-ec2-instance/choose-keypair.png)

- Then you'll be redirected to the Instances page and you'll see your new instance.

![Instances](/images/2021/posts/create-aws-ec2-instance/instances.png)

### Access your instance details

- You can see more details about the instance by clicking on the instance ID, this will redirect you to the Instance summary page where you can find the Public IP of the instance.

![Instance Details](/images/2021/posts/create-aws-ec2-instance/instance-details.png)

### Connect to your instance

- Now open a Terminal or Command Prompt and type the following command to access your instance.

```sh
ssh -i [YOUR KEY PAIR NAME].pem ec2-user@[YOUR PUBLIC IP]
```

- In my case, I used the following command to access my instance. For the first time, you'll be asked to type "yes" to continue.

```sh
ssh -i ubuntu.pem ubuntu@3.110.103.9
```

![SSH](/images/2021/posts/create-aws-ec2-instance/ssh.png)

- You can find exact commands to access your instance by clicking on the connect button on the top right side of the instance details page.

![Connect](/images/2021/posts/create-aws-ec2-instance/connect-to-instance.png)

Now you have a new EC2 instance running on AWS ready to use. But keep in mind that EC2 instances can get pretty expensive to run, depending on the traffic you get, so you should be careful when you use them, and set proper budget notifications and limits in the billing console. If you're not that comfortable with using EC2 and managing all these things, then you can always use the [DigitalOcean Droplet](https://vineelsai.com/posts/digitalocean-droplet) to host your VM, where your instance will be charged according to the plan you choose.
