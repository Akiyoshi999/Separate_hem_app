<template>
  <v-app>
    <v-app-bar color="teal accent-3" app>
      <v-toolbar-title v-for="menu in navMenus" :key="menu" class="ma-2">
        <v-icon>{{ menu.icon }}</v-icon>
        {{ menu.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-icon disable>mdi-account-plus</v-icon>
          Sign in
        </v-btn>
        <v-btn text>
          <v-icon disable>mdi-login</v-icon>
          Log in
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              <v-icon class="mr-2">mdi-account-circle</v-icon>
              ユーザメニュー
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="menu in userMenus" :key="menu">
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      navMenus: [
        { name: 'Top', icon: '' },
        { name: 'お裾分けをする', icon: 'mdi-hand-heart' },
        { name: 'ランキング', icon: 'mdi-crown' }
      ],

      userMenus: [
        { name: 'ユーザ設定', icon: 'mdi-cog' },
        { name: 'ユーザ登録', icon: 'mdi-account-plus' },
        { name: 'ログイン', icon: 'mdi-login' },
        { name: 'ログアウト', icon: 'mdi-logout' }
      ]
    }
  }
}
</script>

<style></style>
