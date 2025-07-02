import '../shared/styles/main.css'

import { createApp } from 'vue'
import App from '@/app/App.vue'
import { create } from 'naive-ui'
import router from '../router'

const app = createApp(App)
const naive = create()

app.use(naive)
app.use(router)
app.mount('#app')
