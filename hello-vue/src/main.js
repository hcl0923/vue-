import Vue from 'vue'
import App from './App'
import ElementUI from "element-ui"
import router from "./router";
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(ElementUI);
Vue.use(router);
Vue.use(VueAxios,axios);

new Vue({
  el: '#app',
  router,
  render: h => h(App)//ELementUI
})
