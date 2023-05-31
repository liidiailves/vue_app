<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      
      <h6>Lorem Ipsum</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laboriosam unde eligendi at, sed quo saepe repellat ad ut voluptates. Ducimus placeat minima eum? Perferendis minima aut porro ipsum quisquam.</p>
      <button class="close" @click="$emit('close-modal')">Close</button>
    </div>
    
  </div>
</template>

<script>
  export default {
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 300px;
  width: 300px;
  margin-top: 10%;
  padding: 60px 5px;
  border-radius: 20px;
}



.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
    