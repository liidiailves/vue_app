<template>
<div class="click-btn">
    <button @click="showModal = true">Click me!</button>
</div>
<Modal v-show="showModal" @close-modal="showModal = false" />
<br>

<item-list />

</template>

<script>
import Modal from './components/Modal.vue'
import ItemList from './components/ItemList.vue'

export default {
  name: 'App',
  components: { Modal, ItemList }, 
  data() {
    return {
      showModal: false,
            }
          }
}
</script>


  
