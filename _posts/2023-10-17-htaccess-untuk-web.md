---
layout: blog-post
title:  "Htaccess Untuk Web"
author: saidqb
categories: [ .htaccess ]
tags: [.htaccess]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

## Remove Path and redirect to main directory

> [Source](https://stackoverflow.com/questions/18668612/remove-directory-from-url-with){:target="_blank"}

Try adding this to the htaccess file in your document root, preferably above any rules you may already have there:
```
RewriteEngine On
RewriteRule ^shopping/(.*)$ /$1 [L]
```

If you want to redirect the browser so that the new URL appears in the location bar, add an R flag in square brackets:

```
RewriteEngine On
RewriteRule ^shopping/(.*)$ /$1 [L,R=301]
```



