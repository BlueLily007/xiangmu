<template>
  <div>
    账号：<input type="text" v-model="username"><br>
    密码：<input type="text" v-model="pwd"><br>
    <button @click="loginEvent">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      pwd:''
    }
  },
  methods: {
    loginEvent(){
      this.$http.get('/api/login',{
        params:{
          username:this.username,
          pwd:this.pwd
        }
      }).then(res=>{
        console.log(res.data)
        if(res.data.errCode===-1){
          // localStorage.setItem('key',res.data.token);
          this.$router.push({
            path:'/Tab2'
          })
        }else{
          alert('错误')
        }
      })
    }
  },
}
</script>

<style lang="scss">
  input {
    width: 80%;
    border:1px solid black;
    line-height: 35px;
  }
</style>