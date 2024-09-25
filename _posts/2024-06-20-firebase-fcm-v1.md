---
layout: blog-post
title:  "Firebase Fcm v1"
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

# TextInput 

### Masking Rupiah

https://medium.com/@vc21496/updating-from-fcm-legacy-api-to-http-v1-api-d0a5a765d363

1. Create and Download a Service Account Key:
- Go to your Google Cloud Console.
- Navigate to IAM & Admin > Service accounts.
- Create a new service account or select an existing one.
- Assign the “Firebase Admin SDK Administrator Service Agent” role to the service account.
- Generate a new JSON key and download it (service account > key > add key). Save this key in your Laravel project’s `storage` directory (e.g., `storage/app/firebase-service-account.json`).

2. Update Your `FcmChannel` Class:

```
<?php

namespace App\Broadcasting;

use Illuminate\Notifications\Notification;
use GuzzleHttp\Client;
use Google_Client;

class FcmChannel
{
    public function send($notifiable, Notification $notification)
    {
        $message = $notification->toFcm($notifiable);

        $client = new Client();
        $response = $client->post('https://fcm.googleapis.com/v1/projects/YOUR_PROJECT_ID/messages:send', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->getAccessToken(),
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'message' => [
                    'token' => $message['to'],
                    'notification' => $message['notification'],
                    'data' => $message['data'],
                ],
            ],
        ]);

        return $response;
    }

    private function getAccessToken()
    {
        $credentialsPath = storage_path('app/firebase-service-account.json'); // Path to your service account file

        $client = new Google_Client();
        $client->setAuthConfig($credentialsPath);
        $client->addScope('https://www.googleapis.com/auth/firebase.messaging');

        $token = $client->fetchAccessTokenWithAssertion();
        return $token['access_token'];
    }
}
```
