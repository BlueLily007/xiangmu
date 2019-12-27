<template>
  <div>
    <div v-for="(item, index) in arr" :key="index" class="box">
      <ul>
        <li><img :src="item.img" alt=""></li>
        <li><h2>{{item.star}}</h2></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[]
    }
  },
  created() {
    this.getdata()
  },
  methods: {
    getdata(){
      this.$http.get('/api/list').then(res=>{
        console.log(res.data)
        this.arr = res.data.list.coming
      })
    },
  },
}
</script>

<style lang="scss">
// @import url('../assets/iconfont/iconfont.css');
  .tab{
    width: 100%;
    height: 40px;
    display: flex;
    color: black;
    justify-content: space-between;
    span{
      text-align: center;
    }
  }
  .box{
    width: 100%;
    display: flex;
    justify-content: space-around;
    ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
      li{
        width: 50%;
      }
    }
}
</style>