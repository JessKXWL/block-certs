<template>
  <div id="app">
    <router-view></router-view>
    <!-- <top-nav>
    </top-nav>
    <login></login> -->
    <test></test>
  </div>
</template>

<script>
// import TopNav from 'components/nav/TopNav'
import Test from 'components/nav/Test'
// import Login from 'views/Login'

export default {
  name: 'App',
  components: {
    // TopNav,
    // Login,
    Test
  }
}
</script>

<style>
  body{
    background-color: #f4f8f9
  }
</style>
