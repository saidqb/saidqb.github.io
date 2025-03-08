---
layout: blog-post
title:  "Stuktur Django"
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


**Struktur Pada Django**

Dalam CMS Django, terdapat beberapa komponen utama yang digunakan dalam struktur aplikasinya, di antaranya:

1.  Models: digunakan untuk mendefinisikan struktur data yang akan disimpan dalam database.
    
2.  Templates: digunakan untuk mendefinisikan tampilan halaman web yang akan ditampilkan ke pengguna.
    
3.  Views: digunakan untuk mengatur logika aplikasi dan mengontrol interaksi antara model dan template.
    
4.  URLconf: digunakan untuk mengatur routing sistem dan menentukan view yang akan dipanggil untuk setiap URL yang diterima oleh aplikasi.
    
5.  Admin: digunakan untuk menyediakan antarmuka administratif yang digunakan oleh administrator untuk mengelola konten aplikasi.
    

Semua komponen ini bekerja sama untuk membuat aplikasi yang fungsional dan mudah digunakan.

**Struktur Folder Pada Django**

Dalam struktur folder dari sebuah proyek Django, terdapat beberapa folder utama yang digunakan, di antaranya:

1.  `manage.py`: adalah skrip yang digunakan untuk mengelola proyek Django, seperti menjalankan server, melakukan migrasi, dan lain-lain.
    
2.  `project_name/`: folder ini berisi konfigurasi proyek Django dan aplikasi yang digunakan dalam proyek tersebut.
    
3.  `project_name/settings.py`: berisi konfigurasi umum proyek seperti konfigurasi database, pengaturan statis file, dan lain-lain.
    
4.  `project_name/urls.py`: berisi routing yang digunakan untuk menentukan URL mana yang akan ditangani oleh aplikasi mana.
    
5.  `app_name/` :folder ini berisi semua file yang diperlukan untuk aplikasi spesifik, seperti model, views, dan templates.
    
6.  `app_name/models.py` :berisi definisi model yang digunakan untuk menyimpan data dalam database.
    
7.  `app_name/views.py` :berisi logika aplikasi yang digunakan untuk mengontrol interaksi antara model dan template.
    
8.  `app_name/templates/` :berisi template yang digunakan untuk menentukan tampilan halaman web.
    
9.  `app_name/static/` :berisi file statis seperti gambar, CSS, dan JavaScript yang digunakan dalam aplikasi.