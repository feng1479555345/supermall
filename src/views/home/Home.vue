<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recom-view :recommends="recommends"/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import RecomView from './childComps/recomView'
import {getHomeMultiData} from 'network/home'
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecomView
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res.data.banner.list)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
  }
</style>