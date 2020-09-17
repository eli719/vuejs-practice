<template>
  <div>
    <div>我是用户</div>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed:{
      userId(){
        return this.$route.params.id
      }
    },
    created() {
      console.log('created')
    },
    destroyed() {
      console.log('destoryed')
    }
    // created() {
    //   console.log('created')
    //   document.title='用户'
    // }
  }
</script>
<style>
</style>
