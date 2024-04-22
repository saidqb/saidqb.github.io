---
layout: blog-post
title:  "Laravel Database"
author: saidqb
categories: [ .laravel ]
tags: [.laravel]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

## sql_mode=only_full_group_by in Laravel Laravel Eloquent?

> [Source](https://stackoverflow.com/questions/43776758/how-can-i-solve-incompatible-with-sql-mode-only-full-group-by-in-laravel-laravel){:target="_blank"}


I solved this problem by adding the "modes" option and setting only the modes I wanted to be enabled in config => database.php:

```
'mysql' => [
    ...
    'modes' => [
        'STRICT_ALL_TABLES',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'NO_AUTO_CREATE_USER',
    ],
],

```



