<template>
 <div class="login">
   <el-input class="div" v-model="input" placeholder="请输入账号"></el-input>
   <el-input class="div" placeholder="请输入密码" v-model="input" show-password></el-input>
   <el-button class="div" type="primary" >登录</el-button>
 </div>
</template>
 
<script>
export default {
 name: 'Login'
 }
</script>
 
<style scoped>
  .login{
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    width: 10%px;
    height: 20%px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);
    margin: 10px 0
}

.div{
  margin: 15px 0 ;
  width:80%;
}
</style>