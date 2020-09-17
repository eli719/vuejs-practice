<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecommendView',
    props: {
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex:1
  }
  .recommend-item img{
     width: 4.375rem;
     height: 4.375rem;
     margin-bottom: 0.625rem;
  }
</style>
