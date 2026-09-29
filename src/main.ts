import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore - Vue SFC type declaration is missing in this project
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')