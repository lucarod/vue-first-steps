import '@/app/assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18nPlugin from './app/plugins/i18n';

const app = createApp(App);

app.use(i18nPlugin, {
  greetings: {
    hello: 'Olá!'
  }
})

app.mount('#app');
