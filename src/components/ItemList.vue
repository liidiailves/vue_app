
<template>
    <div class="input">
        <h1>ToDo List</h1>
        <div class="form">
            <input
                type="text"
                v-bind:value="valueInput"
                v-on:input="handleInput"
                v-on:keypress.enter="addTask">
            <button class="btn" v-on:click="addTask">Add</button>
        </div>
    </div>
       
    <div class="container">
        <h2>
            <span>To Do: </span>
            <span class="mask-num">{{ needDoList.length }}</span>
        </h2>
        <ul class="mask-list">
            <li
              v-for="(mask, index) in needDoList"
              :key="mask.id">
              <div>
                <input type="checkbox" v-on:change="doCheck(index, 'need')"/>
                <span>{{ mask.title }}</span>
              </div>
              <button class="btn-remove" v-on:click="removeMask(index, 'need')">Remove</button>
            </li>
          </ul>
          <h2>
            <span>Done: </span>
            <span class="mask-num">{{ completeList.length }}</span>
          </h2>
          <ul class="mask-list complete-list">
            <li
              v-for="(mask, index) in completeList"
              :key="mask.id"
            >
              <div>
                <input type="checkbox" v-on:change="doCheck(index, 'complete')"  checked>
                <span>{{ mask.title }}</span>
              </div>
              <button class="btn-remove" v-on:click="removeMask(index, 'complete')">Remove</button>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
    data() {
    return {
      valueInput: '',
      needDoList: [],
      completeList: []
    }
    },
    
    methods: {
        handleInput (event) {
          this.valueInput = event.target.value;
        },
        addTask () {
          if(this.valueInput === '') { return };
          this.needDoList.push({
            title: this.valueInput,
          });
          this.valueInput = '';
        },
        doCheck (index, type) {
    
          if(type === 'need') {
            const completeMask = this.needDoList.splice(index, 1);
            this.completeList.push(...completeMask);
          }
          else {
            const noCompleteMask = this.completeList.splice(index, 1);
            this.needDoList.push(...noCompleteMask);
          }
        },
        removeMask (index, type) {
          const toDoList = type === 'need' ? this.needDoList : this.completeList;
          toDoList.splice(index, 1);
        }
      }
    }
</script>