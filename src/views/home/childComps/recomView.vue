<template>
  <div class="recom-view">
    <div class="recom-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "recomView",
  data(){
    return {
    }
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>
<style scoped>
.recom-view{
  display:flex;
  text-align: center;
  font-size:12px;
  padding:10px 0 20px;
  border-bottom:solid 8px #eee;
}
.recom-item{
  flex:1;
  overflow:hidden;
}
.recom-item img{
  float:left;
  width:90%;
  margin-left:5%;
  margin-bottom:10px;
}
</style>