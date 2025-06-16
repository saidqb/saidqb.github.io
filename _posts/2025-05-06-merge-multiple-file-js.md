---
layout: blog-post
title:  "merge multiple file js"
author: saidqb
categories: [ .javascript ]
tags: [.javascript]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

Berikut adalah panduan lengkap menggunakan Gulp untuk menggabungkan banyak file JavaScript menjadi satu file:


Langkah 1: Persiapan Proyek

    Inisialisasi proyek Node.js (jika belum ada):
    

```
npm init -y
```

Install Gulp dan plugin yang diperlukan:


```
    npm install gulp gulp-concat gulp-uglify gulp-sourcemaps --save-dev
```

        gulp-concat: Menggabungkan file

        gulp-uglify: Minifikasi kode

        gulp-sourcemaps: Membuat source maps untuk debugging

Langkah 2: Struktur Folder

Buat struktur file seperti ini:
text

```
project/
├── src/
│   ├── script1.js
│   ├── script2.js
│   └── script3.js
├── dist/            # Output hasil gabungan
└── gulpfile.js      # Konfigurasi Gulp
```

Langkah 3: Buat gulpfile.js
javascript

```
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

// Task untuk menggabungkan file JS
function buildJs() {
  return gulp
    .src([
      './src/script1.js',
      './src/script2.js',
      './src/script3.js'
    ])
    .pipe(sourcemaps.init()) // Init sourcemaps
    .pipe(concat('bundle.js')) // Gabungkan dengan nama bundle.js
    .pipe(uglify()) // Minifikasi (opsional)
    .pipe(sourcemaps.write('.')) // Buat file sourcemap
    .pipe(gulp.dest('./dist')); // Output ke folder dist
}

// Task default yang dijalankan dengan perintah `gulp`
exports.default = buildJs;
```

Langkah 4: Jalankan Gulp

    Tambahkan script di package.json:
    json

"scripts": {
  "build": "gulp"
}

Jalankan:


```
npm run build
```

Atau langsung dengan:


```
    npx gulp
```

Hasil Output

```
    File tergabung: dist/bundle.js

    File minified: dist/bundle.js (jika menggunakan uglify)

    Source maps: dist/bundle.js.map (untuk debugging)
```

Fitur Tambahan
1. Watch Mode (Auto-build saat file berubah)

Tambahkan di gulpfile.js:
javascript

```
function watchFiles() {
  gulp.watch('./src/*.js', buildJs);
}
```

exports.watch = watchFiles;

Jalankan dengan:


```
npx gulp watch
```

2. Tanpa Minifikasi

Hapus pipe(uglify()) jika tidak perlu minifikasi.
3. Urutan File

Pastikan urutan file di gulp.src() sesuai dependensi:
javascript

```
.src([
  './src/library.js',  # File library dulu
  './src/main.js'     # File utama
])
```

Perbandingan dengan Webpack

Fitur Gulp  Webpack

Tujuan  Task runner Module bundler

Konfigurasi Lebih sederhana Lebih kompleks

Cocok untuk Projek kecil/medium Projek besar/modern

Kelebihan Fleksibel untuk workflow  Optimasi otomatis

Tips

    Gunakan gulp-babel jika perlu transpile ES6+:
    

```
npm install gulp-babel @babel/core @babel/preset-env --save-dev
```

Konfigurasi:
javascript


```
const babel = require('gulp-babel');
.pipe(babel({
  presets: ['@babel/preset-env']
}))
```


Untuk CSS/SCSS, bisa tambahkan:

```
    npm install gulp-concat-css gulp-clean-css --save-dev
```

Dengan Gulp, Anda memiliki kontrol penuh atas alur penggabungan file! 🛠️