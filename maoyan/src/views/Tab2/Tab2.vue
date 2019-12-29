<template>
  <div>
    <h1>第二个</h1>
    <input type="text" v-model="inputValue"><button @click="btn">确定</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue:'',
      list:[]
    }
  },
  methods: {
    btn(){
      this.list.push(this.inputValue);
      this.inputValue = ""
    }    
  },
}
</script>

<style lang="scss">

</style>


