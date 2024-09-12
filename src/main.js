import { createApp } from 'vue'

import App from './App.vue'
import Router from './router/index'
import Pinia from './stores/index'
import "./permission"

import 'virtual:uno.css'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(Router)
app.use(Pinia)

app.mount('#app')
