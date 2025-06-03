import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Controller from './components/Controller.vue'
import Viewer from './components/Viewer.vue'
import MyApp from './MyApp.vue'

const app = createApp(MyApp)

app.mount('#app')
