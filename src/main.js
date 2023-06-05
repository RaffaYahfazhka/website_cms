import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/css/app.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/icons.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import jQuery from 'jquery'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(bootstrap)
app.use(jQuery)
app.mount('#app')

