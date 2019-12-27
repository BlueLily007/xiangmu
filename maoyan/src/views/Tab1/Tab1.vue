<template>
  <div>
    <div class="tab">
      <option value="3">北京</option>
      <span><router-link to='/Tab4'>正在热映</router-link></span>
      <span><router-link to='/Tab5'>即将上映</router-link></span>
      <span><i class="iconfont">&#xe6d0;</i></span>
    </div>
    <router-view></router-view>
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