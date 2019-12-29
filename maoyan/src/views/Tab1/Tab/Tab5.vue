<template>
  <div>
    <van-swipe :autoplay="1000" indicator-color="white">
      <van-swipe-item><img src="img/1.jpg" alt="">1</van-swipe-item>
      <van-swipe-item><img src="img/2.jpg" alt="">2</van-swipe-item>
      <van-swipe-item><img src="img/3.jpg" alt="">3</van-swipe-item>
      <van-swipe-item><img src="img/4.jpg" alt="">4</van-swipe-item>
      <van-swipe-item><img src="img/5.jpg" alt="">5</van-swipe-item>
    </van-swipe>
    <br>
    <div v-for="(item, index) in arr" :key="index" class="box">
      <ul>
        <li><img :src="item.img" alt=""></li>
        <li><h2>{{item.comingTitle}}</h2></li>
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
.van-swipe__track{
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  img{
  width: 100%;
  height: 200px;
}
}
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