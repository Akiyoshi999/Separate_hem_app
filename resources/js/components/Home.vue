<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">Navigation Lists</v-navigation-drawer>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-footer color="primary" dark app>
      Vuetify
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style></style>
