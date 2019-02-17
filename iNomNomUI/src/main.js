import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import store from './store'
import APIConnector from './plugins/APIConnector'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(APIConnector, {
    apiUrl: "https://inomnomgarewayapi.azurewebsites.net"
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')