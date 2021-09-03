# 環境構築編

1. Laravel sail のインストール
   curl -s https://laravel.build/laravel-sail-app | bash

2. docker-compose に PHPmyadmin の設定

3. laravel/ui インストール
   composer require laravel/ui

4. laravel/ui vue インストール

5. インストール
   npm i

6. ログイン／ユーザー登録スカフォールドを生成
   php artisan ui vue --auth

7. Vue Router インストール
   npm i--save vue-router

8. Vuetify のインストール
   npm i vuetify
   npm install @mdi/font -D

9. eslint の設定
   npm i eslint --save-dev
   npx eslint --init

10. prettier のインストール
    npm install --save-dev eslint-config-prettier

# 参考記事

## Laravel

[Laravel Sail の使用方法](https://www.notion.so/Laravel-sail-18862f6ad5e9490ca25f51c7381a87f4#c79ac3397f184535adfa6c2c41e5f3d4)
[PHPmyadmin の使用方法](https://qiita.com/kai_kou/items/0e773aaf50698dd5a93f)
[Laaravel で Vuetify を適用する方法](https://www.notion.so/Laravel-vuetify-71b6271a1cb34f8499d19238bc8a4718#a3b7c01183094f2889a0e9395dca05f5)
