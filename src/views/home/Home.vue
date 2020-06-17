<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recom-view :recommends="recommends"/>
    <feature></feature>
    <tab-control :titles="['流行','新款','精选']"
                @tabClick="tabClick"></tab-control>
    <!-- 太长的数据，就可以搞一个计算属性，放在这里。 -->
    <goods-list :goods="showPro"/> 

  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import RecomView from './childComps/recomView'
import Feature from './childComps/feature'
import TabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/goodsList'

import {getHomeMultiData, getHomeGoods} from 'network/home'
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  computed: {
    showPro(){
      //一定不要忘记加 this
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecomView,
    Feature,
    TabControl,
    GoodsList
  },
  created() {
    this.getHomeMultiData()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听相关
    */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    /**
     * 网络请求相关 
    */
    getHomeMultiData(){
      getHomeMultiData().then(res => {
        // console.log(res.data.banner.list)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
      this.goods[type].page+=1
    }
  },
}
</script>
<style scoped>
  #home{
    padding-top:44px;
    padding-bottom:100px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
    position:fixed;
    z-index:9;
    right:0;
    left:0;
    top:0;
  }
  .tab-control{
    position:sticky;
    top:44px;
    z-index:8;
  }
</style>