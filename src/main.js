import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import 'element-plus/dist/index.css'
import initElement from '@/common/element'

const app = createApp(App)
initElement(app)
app.use(store).use(router).mount('#app')
