---
layout: blog-post
title:  "Filamentphp v3 Form"
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

## Masking Rupiah

```
Forms\Components\TextInput::make('rupiah')
->mask(RawJs::make('$money($input, \',\', \'.\', 2)'))
->dehydrateStateUsing(fn ($state) =>  str_replace(['.', ','], ['', '.'], $state))
->afterStateHydrated(fn ($state) =>  number_format($value, $sep, ',', '.'))
```