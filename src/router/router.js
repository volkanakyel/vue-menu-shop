import Vue from 'vue';
import VueRouter from 'vue-router';
import Menu from '../components/features/Menu/Menu'
import Dessert from '../components/features/Dessert/Dessert'
import Cart from '../components/features/Cart/Cart'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/menu',
        },
        {
            path: '/menu', 
            component: Menu
        },
        {
            path: '/dessert',
            component: Dessert
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '**',
            redirect: '/menu'
        }
    ]
})

export default router;