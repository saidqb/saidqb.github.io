---
layout: blog-post
title:  "laravel queue"
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

run schedule queue job

```
// app/Console/Kernel.php

protected function schedule(Schedule $schedule)
{
    // Main queue worker - runs every minute
    $schedule->command('queue:work database --tries=3 --stop-when-empty --max-time=300')
        ->everyMinute()
        ->withoutOverlapping(5)
        ->runInBackground()
        ->appendOutputTo(storage_path('logs/queue-worker.log'));
    
    // High priority queue - runs every 30 seconds
    $schedule->command('queue:work database --queue=high --tries=3 --max-time=300')
        ->everyThirtySeconds()
        ->withoutOverlapping(2)
        ->runInBackground();
    
    // Failed job retries - runs hourly
    $schedule->command('queue:retry all')
        ->hourly();
    
    // Queue health monitoring
    $schedule->command('queue:monitor default,high --max=100')
        ->everyFiveMinutes();
}
```
