/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import Vuetify from 'vuetify'
import AppVar from './components/AppVar'
import Home from './components/Home'

Vue.use(Vuetify)

require('./bootstrap')

window.Vue = require('vue').default

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default)
Vue.component('home-component', Home)
Vue.component('app-var-component', AppVar)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  vuetify: new Vuetify({
    iconfont: 'mdi'
  })
})
