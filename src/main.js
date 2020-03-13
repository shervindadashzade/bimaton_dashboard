import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import {router} from './helpers'

import 'vue-material/dist/vue-material.css'


Vue.use(VueMaterial);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
