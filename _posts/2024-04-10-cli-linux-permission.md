---
layout: blog-post
title:  "Cli Linux change permission"
author: saidqb
categories: [ .cli-linux ]
tags: [.cli-linux]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

mencari dan mengganti permission direktori

```
#directory
find * -type d -print0 | xargs -0 chmod 0755
#file
find . -type f -print0 | xargs -0 chmod 0644

```



