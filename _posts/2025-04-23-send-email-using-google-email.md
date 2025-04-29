---
layout: blog-post
title:  "Send Email Using Google Mail"
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

# Send Email using google from php

## setup google account

- Enable 2-Step Verification first (must active)
- Go to your Google Account (click on your avatar -> Manage your Google Account(above list of yout all account))
- Find Security Menu (left side menu)
- Enable 2-Step Verification
- After do it by giving your account password. Go to bottom of page and find ``App passwords``
- After that you will see "App Password" option in Security page. (If not search it in Google Account Search box.
- Select Mail from the "Select App" dropdown
- Select the device from "Device" dropdown and click the "Generate" button. Copy password and use it in your application where required.
- password use to google for script php

## Laravel setup

.env
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=noreply.example@klaten.go.id
MAIL_PASSWORD="[app password]"
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply.example@klaten.go.id
MAIL_FROM_NAME="no-reply example"
```
