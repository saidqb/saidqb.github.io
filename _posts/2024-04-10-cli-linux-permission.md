---
layout: blog-post
title:  "NGINX Configuration Ci3"
author: saidqb
categories: [ .nginx ]
tags: [.nginx]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

![source](https://gist.github.com/yidas/30a611449992b0fac173267951e5f17f)
```

# Deny for accessing .htaccess files for Nginx
location ~ /\.ht {
	deny all;
}

# Deny for accessing codes
location ~ ^/(application|system|tests)/ {
	return 403;
}

```

disable php


URL match with another location. Post configure file.

Interchanging location(regular expressions are checked in the order defined in the configuration file):


```

location ~ /views/(.+)\.php$ {
 deny all;
}

location ~ \.php$ {
.....


```



