<template>
  <div class="goods-list">
    <goods-item v-for="(item,index) in goods" :key="index" :goods-item="item" />
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  name:"GoodsList",
  components:{
    GoodsItem
  },
  props:{
    goods:{
      type:Array,
      dafault(){
        return []
      }
    }
  }
}
</script>
<style scoped lang="scss">
div.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>