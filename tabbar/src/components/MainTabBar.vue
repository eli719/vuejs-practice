<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
          <img slot="item-icon" src="~assets/img/tabbar/首页.svg" />
          <img slot="item-icon-active" src="~assets/img/tabbar/分类.svg" />
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/分类.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/分类.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/购物.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/分类.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/我的.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/分类.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar.vue'
  import TabBarItem from 'components/tabbar/TabBarItem.vue'
  export default{
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
