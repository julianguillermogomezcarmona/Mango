import { createRouter, createWebHistory } from 'vue-router';
import login from '../components/login_register/Login.vue'
import account from '../components/Account.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../components/IndexHome.vue'),
            name: 'home'
        },
        {
            path: '/',
            component: account,
            children: [
                {
                    path: 'login',
                    component: login,
                    name: 'login'
                },
                {
                    path: 'register',
                    component: () => import('../components/login_register/Register.vue'),
                    name: 'register'

                }
            ]
        },
        {
            path: '/admin',
            component: () => import('../components/admin/Admin.vue'),
            children: [
                {
                    path: 'dashboard',
                    component: () => import('../components/admin/Dashboard.vue'),
                    name: 'dashboard'
                },
                {
                    path: 'poducts',
                    component: () => import('../components/admin/Products.vue'),
                    name: 'products'
                },
                {
                    path: 'categories',
                    component: () => import('../components/admin/Categories.vue'),
                    name: 'categories'
                },
                {
                    path: 'setting',
                    component: () => import('../components/admin/setting.vue'),
                    name: 'setting'
                },
            ],

        }
    ],
    linkActiveClass: 'bg-white text-first',

});

router.beforeEach(async(to,from) => {
    if (to.path == '/admin'){
        return{
            name: 'dashboard'
        }
    }if (to.path=='/account') {
        return{
            name: 'login'
        }
    } else {
        
    }
})
export default router;
