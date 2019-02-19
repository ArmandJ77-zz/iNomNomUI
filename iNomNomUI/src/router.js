import VueRouter from 'vue-router';

import siteLayoutView from './views/siteLayoutView.vue'
import loginView from './views/loginView.vue'

import EmployeeDirectoryLayout from './layouts/EmployeeDirectoryLayout.vue';
import LunchMenuLayout from './layouts/LunchMenuLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import UserDetailLayout from './layouts/UserDetailLayout.vue';

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
                {
                    path: "/dashboard",
                    name: "DashboardLayout",
                    component: DashboardLayout
                },
                {
                    path: "/UserDetailLayout",
                    name: "UserDetailLayout",
                    component: UserDetailLayout
                },
            ]

        }
    ]
})

vueRouter.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (authRequired && isLoggedIn === "false") {
        return next('/');
    }

    next();
})

export default vueRouter;