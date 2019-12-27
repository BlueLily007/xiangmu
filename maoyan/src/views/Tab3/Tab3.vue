<template>
  <div>
    <van-swipe :autoplay="1000" indicator-color="white">
      <van-swipe-item><img src="img/1.jpg" alt="">1</van-swipe-item>
      <van-swipe-item><img src="img/2.jpg" alt="">2</van-swipe-item>
      <van-swipe-item><img src="img/3.jpg" alt="">3</van-swipe-item>
      <van-swipe-item><img src="img/4.jpg" alt="">4</van-swipe-item>
      <van-swipe-item><img src="img/5.jpg" alt="">5</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.van-swipe__track{
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
img{
  width: 100%;
  height: 200px;
}
</style>