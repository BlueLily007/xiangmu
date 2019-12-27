<template>
  <div class="app">
    <header class="header">
      猫眼电影
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  components:{
    Footer
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');
@import url('./assets/iconfont/iconfont.css');
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-align: center;
    color: cadetblue
  }
  .header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    background: red;
    color: white;
  }
  .main{
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center
  }
  .footer ul{
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
</style>