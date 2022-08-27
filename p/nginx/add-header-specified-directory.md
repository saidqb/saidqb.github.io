---
layout: default
post: true
title: Add header specified directory
categories: [nginx]
---


```
location /assets/dk/ {
  location ~* (\.(?!(ttf|ttc|otf|eot|woff|font.css|css|woff2)))$ {
    add_header Access-Control-Allow-Origin "*";
  }
}
```