<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    }
    ,
    methods:{
      itemClick(){
        console.log('itemClick')
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 3.0625rem;
    font-size: 0.875rem;
  }

  .tab-bar-item img{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.1875rem;
    vertical-align: middle;
  }

  .active{
    color: red;
  }
</style>
