import Vue from 'vue'
import Router from 'vue-router';
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes:[
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
],})
export default router;