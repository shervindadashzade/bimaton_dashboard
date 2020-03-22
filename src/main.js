import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import {router} from './helpers'


import 'vue-material/dist/vue-material.css'


import { store } from "./store"

Vue.use(VueMaterial);


//setup fake backend
import {configureFakeBackend} from "./helpers"
configureFakeBackend();


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
