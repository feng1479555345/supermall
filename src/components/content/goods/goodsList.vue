<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>
<script>
import GoodsListItem from './goodsListItem'
export default {
  name: "goodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {
    }
  }
}
</script>
<style scoped>
.goods{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;

  /* 微调两边的边距 */
  padding:4px;
}
</style>