---
layout: blog-post
title:  "generate class all"
author: saidqb
categories: [ .tailwindcss ]
tags: [.tailwindcss]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

generate class all

```
safelist: [
   
    // Add other problematic classes
    { pattern: /^m-./ },
    { pattern: /^p-./ },
    { pattern: /^[mp][tblrxy]?-./ },
    { pattern: /^bg-./ },


  ],
```

```
/** @type {import('tailwindcss').Config} */

import colors, { gray } from 'tailwindcss/colors'

export default {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "./*.{html,php}",

  ],
  safelist: [
   
    // Add other problematic classes
    // padding margin all
    { pattern: /^m-./ },
    { pattern: /^p-./ },
    { pattern: /^[mp][tblrxy]?-./ },

    // background a;;
    { pattern: /^bg-./ },


  ],
  theme: {
    extend: {
      colors: {
        abcdee: '#4F46E5',
        primary: '#4F46E5',
        secondary: '#10B981',
        dark: '#1F2937',
        light: '#F9FAFB',
        danger: colors.rose,
        success: colors.green,
        warning: colors.yellow,
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,

      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

```