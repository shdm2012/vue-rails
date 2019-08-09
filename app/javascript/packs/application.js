import Vue from 'vue'
import App from '../components/App.vue'
import Message from '../components/Message.vue'

Vue.component('app-message',Message)

document.addEventListener('DOMContentLoaded', () => {
    const el = document.body.appendChild(document.createElement('application'))
    const app = new Vue({
        el,
        render: h => h(App)
    })

    console.log(app)
})
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
