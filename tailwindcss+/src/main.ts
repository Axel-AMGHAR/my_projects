import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import tailwindcss_config from './config.js'

const app = createApp(App)
app.config.globalProperties.tailwindcss_config = tailwindcss_config;
app.mount('#app');
