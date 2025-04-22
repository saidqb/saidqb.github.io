---
layout: blog-post
title:  "Laravel Url Livewire"
author: saidqb
categories: [ .livewire ]
tags: [.livewire]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

### full current Url livewire

namespace App\Providers\AppServiceProvider;
```php
use Illuminate\Support\Facades\URL;
public function boot()
{
	URL::macro('livewire_current_url', function () {
	    if (request()->route()->named('livewire.update')) {
	        $previousUrl = url()->previous();
	        return $previousUrl;
	    } else {
	        return request()->fullUrl();
	    }
	});
}
 ```
### current param url

```php

URL::macro('livewire_current_url_param', function () {
    return new class() {
        public function __construct() {}

        public function get($key)
        {

            if (request()->route()->named('livewire.update')) {
                $previousUrl = url()->previous();
                $fullUrl = $previousUrl;
            } else {
                $fullUrl = request()->fullUrl();
            }

            $getParam = null;
            $url_component = parse_url($fullUrl);

            if (isset($url_component['query'])) {
                parse_str($url_component['query'], $params);
                if (isset($params[$key])) {
                    $getParam = $params[$key];
                }
            }

            return $getParam;
        }
    };
});

```




