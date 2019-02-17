import VueRouter from 'vue-router';

import siteLayoutView from './views/siteLayoutView.vue'
import loginView from './views/loginView.vue'

import EmployeeDirectoryLayout from './layouts/EmployeeDirectoryLayout.vue';
import LunchMenuLayout from './layouts/LunchMenuLayout.vue';

var vueRouter = new VueRouter({
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

vueRouter.beforeEach((to, from, next) => {
    debugger;
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (authRequired && isLoggedIn === "false") {
        return next('/');
    }

    next();
})

export default vueRouter