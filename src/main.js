

import { createApp } from 'vue'
import App from './App.vue'
import ItemList from './components/ItemList.vue'
import Modal from './components/Modal.vue'




const app = createApp(App)
app.component('modal', Modal)
app.component('item-list', ItemList)



app.mount('#app')


