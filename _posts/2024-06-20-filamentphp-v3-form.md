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

### Masking Rupiah

```
Forms\Components\TextInput::make('rupiah')
->mask(RawJs::make('$money($input, \',\', \'.\', 2)'))
->dehydrateStateUsing(fn ($state) =>  str_replace(['.', ','], ['', '.'], $state))
->afterStateHydrated(fn ($state) =>  number_format($value, $sep, ',', '.'))
```

### hide button by query url tabs
```php
->extraAttributes([
	'x-init' => "
	window.addEventListener(`DOMContentLoaded`, function(event) {
		qtab = new URLSearchParams(location.search).get(`tab`);
		if(typeof qtab != `undefined`){
			if(qtab == `ort-laman-2-tab`){
				show = true;
			}
		}
		});
		window.addEventListener(`click`, function(){
			qtab = new URLSearchParams(location.search).get(`tab`);
			show = false;
			if(qtab == `ort-laman-2-tab`){
				show = true;
			}
			});
			",
			'x-data' => "{ show: false }",
			'x-show' => "show",
			])
```

### upload file with random last prefix

```php
 Forms\Components\FileUpload::make('lhp_final_dokumen')
    ->inlineLabel()
    ->getUploadedFileNameForStorageUsing(
        fn (TemporaryUploadedFile $file): string => (string) str(
            str($file->getClientOriginalName())->replaceEnd('.' . $file->guessExtension(), '')
        )->append('-' . date('Ymdhis') . '.' . $file->guessExtension()),
    )
```

###
Forms\Components\TextInput::make('token')
     ->label(__('Token ')), 
Forms\Components\Actions::make([
    Forms\Components\Actions\Action::make('Generate Token')
        ->action(function (Forms\Get $get, Forms\Set $set) {
            $set('token', str()->random(20));
        })
])
###
