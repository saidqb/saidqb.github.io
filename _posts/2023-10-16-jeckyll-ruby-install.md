---
layout: blog-post
title:  "Ruby Jeckyll install"
author: saidqb
categories: [ Jeckyll ]
tags: [Jeckyll]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: "blank"
toc: false
---


[https://jekyllrb.com/docs/ruby-101/](https://jekyllrb.com/docs/ruby-101/)


Gemfile
```ruby
# frozen_string_literal: true

source "https://rubygems.org"


# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#  bundle exec jekyll serve
#
#  bundle exec jekyll serve --watch
#
# If you have any plugins, put them here!
gemspec
gem "jekyll"
gem 'wdm', '>= 0.1.0'

group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-paginate'
    gem 'jekyll-seo-tag'
    gem 'jekyll-archives'
    gem 'kramdown'
    gem 'rouge'
end

gem "webrick", "~> 1.8"

```

```ruby
bundle install
// untuk run watch
bundle add webrick

bundle exec jekyll serve --watch
```

[https://github.com/wowthemesnet/mediumish-theme-jekyll/](https://github.com/wowthemesnet/mediumish-theme-jekyll/)
