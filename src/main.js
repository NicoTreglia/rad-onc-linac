// import './Config/firebase';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueFire from 'vuefire'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(vueFire);

Vue.config.productionTip = false

new Vue({
  data:{
    date: Date()
  },
  router,
  render: h => h(App)
}).$mount('#app')
