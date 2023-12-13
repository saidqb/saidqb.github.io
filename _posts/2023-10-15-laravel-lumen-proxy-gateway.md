---
layout: blog-post
title:  "Laravel Lumen Proxy Gateway"
author: saidqb
categories: [ Starter ]
tags: [starter]
image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: "blank"
toc: false
---

BASIC
```php
use GuzzleHttp\Client as HttpClient;
Route::any('/proxy/{path}', function(Request $req, $path) {
  $client = new HttpClient([
    'base_uri' => 'https://httpbin.org'
  ]);

  return $client->request($req->method(), $path);
});
```

EXPERT
```php
<?php
// you could use either routes/web.php or routes/api.php

// simple helper function to filter header array on request & response
function filterHeaders($headers) {
    $allowedHeaders = ['accept', 'content-type'];

    return array_filter($headers, function($key) use ($allowedHeaders) {
        return in_array(strtolower($key), $allowedHeaders);
    }, ARRAY_FILTER_USE_KEY);
}

Route::any('/proxy_example/{path}', function(Request $request, $path) {
    $client = new GuzzleHttp\Client([
        // Base URI is used with relative requests
        'base_uri' => 'https://pie.dev', // public dummy API for example
        // You can set any number of default request options.
        'timeout'  => 60.0,
        'http_errors' => false, // disable guzzle exception on 4xx or 5xx response code
    ]);

    // create request according to our needs. we could add
    // custom logic such as auth flow, caching mechanism, etc
    $resp = $client->request($request->method(), $path, [
        'headers' => filterHeaders($request->header()),
        'query' => $request->query(),
        'body' => $request->getContent(),
    ]);

    // recreate response object to be passed to actual caller 
    // according to our needs.
    return response($resp->getBody()->getContents(), $resp->getStatusCode())
       ->withHeaders(filterHeaders($resp->getHeaders()));

})->where('path', '.*'); // required to allow $path to catch all sub-path

```
Untuk Lumen

Lumen Route

```php
$router->get('gateway/{path:[A-Za-z0-9\-@_=:\/+|.]+}', [
     'as'=> 'gateway', 'uses' => 'GatewayController@gtw'
]);
$router->post('gateway/{path:[A-Za-z0-9\-@_=:\/+|.]+}', [
     'as'=> 'gateway', 'uses' => 'GatewayController@gtw'
]);
```


Lumen Gateway

```php
public function gtw(Request $request, $path){

	$client = new \GuzzleHttp\Client([
        // Base URI is used with relative requests
        'base_uri' => 'http://abc.com', // public dummy API for example
        // You can set any number of default request options.
        'timeout'  => 60.0,
        'http_errors' => false, // disable guzzle exception on 4xx or 5xx response code
    ]);

    // create request according to our needs. we could add
    // custom logic such as auth flow, caching mechanism, etc
	$resp = $client->request($request->method(), $path, [
		'headers' => $this->filterHeaders($request->header()),
		'query' => $request->query(),
		'body' => $request->getContent(),
	]);

    // recreate response object to be passed to actual caller 
    // according to our needs.

	$res = $resp->getBody()->getContents();

	if (strpos($path, 'digateway') !== false) {
		$res = str_replace('http://abc.com/', config('app.site_url').'/gateway/', $res);
	}


	return response($res, $resp->getStatusCode())
	->withHeaders($this->filterHeaders($resp->getHeaders()));

}
```

source:
> https://dev.to/azophy/using-laravel-as-a-service-proxygateway-3ig9