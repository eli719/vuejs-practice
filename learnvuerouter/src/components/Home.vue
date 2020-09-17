<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'Home',
    data(){
      return{
        message:"hi",
        path:"/home/news"
      }
    },
    created() {
      console.log('created')
    },
    destroyed() {
      console.log('destoryed')
    },
    //这两个函数只有组件被保持了状态使用了keep-alive是才有效
    activated() {
      console.log('activated')
      this.$router.push(this.path)
    },
    beforeRouteLeave(to,from,next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }
</script>

<style>
</style>
