import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import VueToasted from 'vue-toasted'
import GlobalToastMessages from './modules/GlobalToastMessages'
import APIConnector from './plugins/APIConnector'

Vue.config.productionTip = false
Vue.use(VueToasted)
Vue.use(VueRouter);
Vue.use(APIConnector, {
    apiUrl: "http://localhost:54625" //"https://inomnomgarewayapi.azurewebsites.net"
})

//To Register the toast messages
new GlobalToastMessages();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')