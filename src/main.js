import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// Vue.prototype.$echarts = echarts
Vue.use(ViewUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
