import Vue from 'vue'
import Router from 'vue-router'

import siteLayoutView from './views/siteLayoutView.vue'
import loginView from './views/loginView.vue'

import EmployeeDirectoryLayout from './layouts/EmployeeDirectoryLayout.vue';
import LunchMenuLayout from './layouts/LunchMenuLayout.vue';
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: {
                name: 'Login'
            }
        },
        {
            path: '/',
            name: 'Login',
            component: loginView
        },
        {
            path: '',
            name: 'siteLayout',
            component: siteLayoutView,
            children: [{
                    path: "/employeedirectory",
                    name: "EmployeeDirectoryLayout",
                    component: EmployeeDirectoryLayout
                },
                {
                    path: "/lunchmenu",
                    name: "LunchMenuLayout",
                    component: LunchMenuLayout
                },
            ]

        }
    ]
})