import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// body {
//   @apply bg-gray-50 text-gray-900;
// }
