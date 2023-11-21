---
layout: default
post: true
title: Laravel Proxy Getway
categories: [laravel]
---

https://dev.to/azophy/using-laravel-as-a-service-proxygateway-3ig9

BASIC
```
use GuzzleHttp\Client as HttpClient;
Route::any('/proxy/{path}', function(Request $req, $path) {
  $client = new HttpClient([
    'base_uri' => 'https://httpbin.org'
  ]);

  return $client->request($req->method(), $path);
});

```

EXPERT
```
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
