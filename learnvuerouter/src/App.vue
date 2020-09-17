<template>
  <div id="app">
    <p>嘀嘀嘀</p>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" replace >关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="/user/+userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path:'/profile',query:{name:'eli',age:12,height:190}}">档案</router-link>
    <button @click="profileClick">档案</button>
    <!-- <router-view></router-view> -->
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
    <h3>啦啦啦啦</h3>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'eli'
      }
    },
    methods: {
      homeClick() {
        //通过代码的方式也可以修改路由 vue-router
        //push => pushState
        // this.$router.push('/home')
        this.$router.replace("/home")
        console.log('homeClick')
      },
      aboutClick() {
        this.$router.push('/about')
        console.log('aboutClick')
      },
      profileClick(){
        this.$router.push({
          path:'/profile',
          query:{
            name:'qwe',
            age:21,
            height:1.22
          }
        })
      }
    }
  }
</script>
<style>
  .active {
    color: red
  }
</style>
