<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
      class="tab-control-item"
      :key="index"
      @click="tabClick(index)"
      :class="{active:index===countIndex}"
      >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabControl",
  data(){
    return {
      countIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return{}
      } 
    }
  },
  methods: {
    tabClick(index){
      this.countIndex = index
      this.$emit('tabClick',index)
    }
  },
}
</script>
<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background:#fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color:var(--color-hith-text)
  }
  .active span{
    border-bottom:solid 2px var(--color-tint);
    padding:5px;
  }
</style>