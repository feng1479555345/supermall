<template>
  <div class="goodsItem">
    <img :src="goodsitem.show.img">
    <div class="goods_txtBox">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
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
.goodsItem{
  width:48%;
  position:relative;
  padding-bottom:40px;
  margin-top:10px;
}
.goodsItem img{
  width:100%;
  border-radius: 5px;
}
.goods_txtBox p{
  width:100%;
  text-align: left;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size:12px;
  margin:2px 0;
}
.goods_txtBox{
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  width:100%;
}
.price{
  display: inline-block;
  margin-right:26px;
  color: var(--color-tint);
  font-size: 14px;
}
.collect{
  display: inline-block;
  position:relative;
}
.collect:before{
  content: '';
  position: absolute;
  left: -15px;
  top: 3px;
  width: 15px;
  height: 15px;
  background: url("~assets/img/common/collect.svg") 0 0/15px 15px;
}
</style>