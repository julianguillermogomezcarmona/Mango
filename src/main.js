import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {createMetaManager} from 'vue-meta'


library.add(fas)
library.add(far)
const app = createApp(App)
app.component('fa',FontAwesomeIcon)
app.use(createMetaManager())
app.use(router)
app.mount('#app')
