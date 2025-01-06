---
layout: blog-post
title:  "Google Re Captcha"
author: saidqb
categories: [ .textinput ]
tags: [.textinput]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

# Laravel - v2 recaptcha

https://medium.com/@donjadene/integrate-google-recaptcha-v2-in-laravel-ca4d2460afc8

```php
<?php

namespace App\\Rules;
use Closure;
use Illuminate\\Contracts\\Validation\\ValidationRule;
use Illuminate\\Support\\Facades\\Http;
class Recaptcha implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \\Closure(string): \\Illuminate\\Translation\\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $gResponseToken = (string) $value;

        $response = Http::asForm()->post(
            '<https://www.google.com/recaptcha/api/siteverify>',
            ['secret' => env('RECAPTCHA_SECRET_KEY'), 'response' => $gResponseToken]
        );

        if (!json_decode($response->body(), true)['success']) {
            $fail('Invalid recaptcha');
        }
    }
}

``` 


```PHP
'g-recaptcha-response' => ['required', new Recaptcha],
```