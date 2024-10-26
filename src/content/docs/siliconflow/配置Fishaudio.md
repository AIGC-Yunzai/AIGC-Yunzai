---
title: 配置Fishaudio
description: SiliconFlow 插件使用指南
sidebar:
  label: Fishaudio 配置
  order: 2
---

## 使用方法

要使用 SiliconFlow 插件的fish语音同传，请按照以下步骤操作：

### 1. 创建账户

Fishaudio可以白嫖 10 刀API额度，访问以下链接并进行注册，注册需要手机号进行验证，国内外均可。

注册地址：[https://fish.audio/zh-CN/auth/signup/](https://fish.audio/zh-CN/auth/signup/)

![image.png](https://image.ulaara.xyz/file/1729920333196_image.png)


### 2. 新建 API 密钥

1. 进入账户管理，进行手机号验证

![image.png](https://image.ulaara.xyz/file/1729920542065_image.png)



2. 进入API密钥页面，点击新建API密钥

![新建API密钥](https://image.ulaara.xyz/file/1729920714063_image.png)

### 3. 创建新项目

1. 密钥描述随便填，点击完成

![新建密钥](https://image.ulaara.xyz/file/1729920812578_image.png)

2. 点击复制密钥

![复制密钥](https://image.ulaara.xyz/file/1729920872538_image.png)
### 4. 锅巴配置

进入锅巴插件，找到fish_apikey栏进行配置
![fish_apikey](https://image.ulaara.xyz/file/1729921350822_image.png)

将你刚才复制的fish的密钥复制进入fish_apikey的表单中

![fish_apikey](https://image.ulaara.xyz/file/1729921412033_image.png)

点击确认，返回保存后，就可以愉快地语音同传了！

![保存](https://image.ulaara.xyz/file/1729921547773_image.png)

### 5.查找发音人ID

1.通过指令查找发音人

![指令查找](https://image.ulaara.xyz/file/1729922750785_image.png)

2.添加新音色

当没有找到自己想要找到的发音人时，可在fishaudio官网上搜索，或者自己在官网构建声音

![黑塔](https://image.ulaara.xyz/file/1729923312703_image.png)

当在官网上找到别人炼好的发音人时，可以复制地址栏[https://fish.audio/zh-CN/m/](https://fish.audio/zh-CN/m/)后的发音人ID

![黑塔ID](https://image.ulaara.xyz/file/1729923291230_image.png)

然后在通过指令添加该音色

![添加新音色](https://image.ulaara.xyz/file/1729923771911_image.png)
3.从Fish官网使用tag搜索发音人
    
例如通过指令#sf搜索fish发音人派蒙

![image.png](https://image.ulaara.xyz/file/1729924791234_image.png)


:::note
你可以根据锅巴的相关配置，自由设置发音人，是否开启翻译，翻译目标语言等选项
:::

:::caution
所有的发音人都是需要消耗API额度的，同传时请注意损耗。
:::
