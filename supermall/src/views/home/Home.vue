<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','经典']" @tabClick />
    <goods-list :goods="showGoods" />
    <ul>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
      <li>asdas</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList.vue'


  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop'
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关
       */
      tabClick(index) {
        switch (index) {
          case :0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      computed:{
        showGoods(){
          return this.goods[this.currentType].list
        }
      }

      /**
       * 网络请求相关
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res)
          // this.goods[type].list.push(...res.data.list)
          // this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #FFFFFF;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px
  }
</style>
