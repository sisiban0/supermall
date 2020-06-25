import Vue from 'vue'
import App from './App.vue'

import router from './router'

import toast from 'common/toast'

// Vue.use(toast);

// Vue.prototype.$toast.showMsg('hehe')

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
