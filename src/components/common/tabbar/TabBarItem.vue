<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActive?{color:this.activeColor}:{}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      //不能写死
      // isActive:false
    }
  },
  computed: {
    isActive(){
      //判断，处于活跃状态的页面路径是否包含当前的路径，不等于-1代表找到了，返回就是true
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(e => {});
    }
  }
}
</script>
<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;
    font-size:14px;
  }
  .tab-bar-item img{
    width:24px;
    height:24px;
    margin-top:3px;
    vertical-align: middle;   /*去掉图片下方默认的3像素边框*/
    margin-bottom:2px;
  }
  /* 文字的颜色不写死，让用户可以自己决定使用的颜色 */
  /* .active{
    color:red;
  } */
</style>