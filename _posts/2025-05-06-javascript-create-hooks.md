---
layout: blog-post
title:  "Create Hook Javascript"
author: saidqb
categories: [ javascript, hooks ]
tags: [javascript, hooks]
# image: assets/images/placeholder.png
featured: false
hidden: true
rating: 4.5
beforetoc: ""
toc: grue
---

generate class all

```

// Hook registry
const builderHooks = {

    // Modal
    onSave: [],
    onModalSaveImage: [],
    double: [],
    triple: []
};

// Register hook function
function registerClickHook(type, callback) {
    if (builderHooks[type]) {
        builderHooks[type].push(callback);
    }
}

function addHooks(type) {
    builderHooks[type].forEach(hook => hook());
}

registerClickHook('onSave', function () {
    initBuilderContent(); // Reload the builder iframe to reflect changes
});

registerClickHook('onShowModalEditSection', function () {
    hljs.highlightAll();
});
registerClickHook('onModalSaveImage', function () {
    initBuilderContent(); // Reload the builder iframe to reflect changes
});
```
