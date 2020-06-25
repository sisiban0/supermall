<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {

    }
  },
}
</script>
<style scoped lang="scss">
div.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  .recommend-item{
    flex:1;
    a{
      display: block;
      width: 90%;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
    // width: 100px;
  }
}
</style>