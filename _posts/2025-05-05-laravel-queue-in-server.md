---
layout: blog-post
title:  "Laravel Queue Server"
author: saidqb
categories: [ .email ]
tags: [.email]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

Menjaga Queue Laravel Tetap Berjalan di Server

Untuk memastikan queue Laravel tetap berjalan di server, ada beberapa pendekatan yang bisa Anda gunakan:
1. Menggunakan Supervisor (Rekomendasi)

Supervisor adalah proses control system yang bisa digunakan untuk mengontrol dan memonitor proses Laravel queue worker.

Langkah-langkah instalasi dan konfigurasi:

Install Supervisor:
bash

```
sudo apt-get update
sudo apt-get install supervisor
```

Buat file konfigurasi untuk queue worker (biasanya di /etc/supervisor/conf.d/laravel-worker.conf):
ini

```
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/your/project/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=www-data
numprocs=8
redirect_stderr=true
stdout_logfile=/path/to/your/project/storage/logs/worker.log
```

Mulai dan aktifkan Supervisor:
bash

```
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start laravel-worker:*
```

2. Menggunakan Systemd (Untuk Linux Modern)

Buat file service di /etc/systemd/system/laravel-queue.service:
ini
```
[Unit]
Description=Laravel Queue Worker

[Service]
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /path/to/your/project/artisan queue:work --sleep=3 --tries=3
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=laravel-queue
bash

[Install]
WantedBy=multi-user.target
```
Aktifkan dan jalankan service:
```

sudo systemctl daemon-reload
sudo systemctl enable laravel-queue
sudo systemctl start laravel-queue
```

3. Menggunakan Cron Job (Opsional)

Anda bisa menjadwalkan queue worker untuk dijalankan secara berkala:
bash

```
* * * * * cd /path-to-your-project && php artisan queue:work --once >> /dev/null 2>&1
```

Tips Tambahan:

- Untuk queue yang penting, gunakan --tries untuk menentukan jumlah percobaan ulang

- Gunakan --timeout untuk mencegah worker berjalan terlalu lama

- Monitor log queue worker secara berkala

- Untuk aplikasi produksi, pertimbangkan menggunakan queue driver seperti Redis atau database daripada sync

Pastikan untuk menyesuaikan path dan pengaturan sesuai dengan lingkungan server Anda