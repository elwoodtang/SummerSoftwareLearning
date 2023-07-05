import Vue from 'vue'
import App from './App.vue'

//element01
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import './assets/global.css';
import axios from "axios";
import VueRouter from 'vue-router';
import router from './router';
import store from './store';

/*导入使用axios处理跨域问题*/
Vue.prototype.$axios=axios;
Vue.prototype.$httpUrl='http://localhost:8090'
Vue.config.productionTip = false

/*前端全局引用完整的element UI 02*/
//Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(ElementUI,{size:'small'});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
