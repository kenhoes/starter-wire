
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createPinia } from 'pinia'


//PrimeVue
// import 'primevue/resources/themes/arya-blue/theme.css'
import './assets/main.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(PrimeVue, { unstyled: true });
app.use(PrimeVue);



app.mount('#app')
