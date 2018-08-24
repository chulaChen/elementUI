import Vue from 'vue'
import Element from 'element-ui';
import App from './App'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$http= axios;
axios.defaults.baseURL = 'http://localhost:8080/start';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
