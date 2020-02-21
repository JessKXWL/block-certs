<template>
  <el-header style="font-size: 12px;">
      <!-- <img src="../../assets/img/logo.png" class="nav-logo"> -->
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#ffffff"
        text-color="#3e3f42"
        active-text-color="#409eff">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">消息中心</el-menu-item>
      <el-menu-item index="3">订单管理</el-menu-item>
      <slot></slot>
      </el-menu>
  </el-header>
</template>
 
<script>
export default {
 name: 'TopNav',
 data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
 
<style scoped>
.container{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
}
.nav-logo{
  width: 200px;
  height: 80px;
}
</style>