---
layout: default
post: true
title: Laravel Migration Cheatseet
categories: [laravel]
---



```
\DB::statement('SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";');


# Execute table
$table->unsignedBigInteger('ext_int_auto')->autoIncrement();
$table->unsignedBigInteger('ex_biginteger_def')->default('0');
$table->unsignedInteger('ex_integer')->default('0');
$table->unsignedTinyInteger('ex_tinyint')->default('0')->comment('cmt');
$table->char('ex_char', 10)->nullable();
$table->string('ex_varchar', 100)->nullable();
$table->string('ex_varchar_def', 100)->default('string');
$table->string('ex_varchar_def_comment', 100)->default('string')->comment('cmt');
$table->dateTime('ex_datetime')->default('0000-00-00 00:00:00');
$table->longText('ex_longtext')->nullable();
$table->text('ex_text')->nullable();

# ADD index
$table->index('ex_bigint');
$table->unique('ex_varchar_email');
$table->index('pkg_is_delete','pkg_is_delete');
$table->index(['pkg_p_id','pkg_group','pkg_type','pkg_is_delete','pkg_id'],'pkg_type_delete');
```