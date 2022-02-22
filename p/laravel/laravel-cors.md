---
layout: default
post: true
title: Mengatasi Cors Pada Laravel Api (Lumen)
categories: [laravel]
---

Tambahakan object header pada ``$next()-header()``
```
<?php // /app/Http/Middleware/middlewareFile.php

namespace App\Http\Middleware;

public function handle($request, Closure $next)
{
	return $next($request)
	->header('Access-Control-Allow-Origin', '*')
	->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
	->header('key', 'value');
}

```

> https://gist.github.com/drewjoh/43ba206c1cde9ace35de154a5c84fc6d