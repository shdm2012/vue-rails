import Vue from 'vue'
import Router from 'vue-router'
import router from '../routes.js'
import App from '../components/App.vue'
import Message from '../components/Message.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

document.addEventListener('DOMContentLoaded', () => {
    const el = document.body.appendChild(document.createElement('application'))
    const app = new Vue({
        el,
        router,
        render: h => h(App)
    })

    console.log(app)
})



// document.addEventListener('DOMContentLoaded', () => {
//     new Vue({
//         el: '#application',
//         router,
//         render: (h) => h(App),
//     });
// });
