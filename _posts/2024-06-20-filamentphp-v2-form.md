---
layout: blog-post
title:  "Filamentphp v2 Form"
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

```
Forms\Components\TextInput::make('rupiah')
 ->mask(
    fn(TextInput\Mask $mask) => $mask
        ->numeric()
        ->thousandsSeparator('.') // Add a separator for thousands.
        ->decimalPlaces(3) // Set the number of digits after the decimal point.
        ->decimalSeparator(','), // Add a separator for decimal numbers.
)
->dehydrateStateUsing(fn($state) =>  str_replace(['.', ','], [',', '.'], $state))
->afterStateHydrated(fn(TextInput $component, $state) =>  $component->state(number_format($state, 3, ',', '.')))
```
