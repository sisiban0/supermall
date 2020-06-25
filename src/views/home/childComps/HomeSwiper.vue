<template>
  <swiper ref="swiper" >
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" alt />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "common/swiper";
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created() {

  },
  components:{
    Swiper,
    SwiperItem
  },
  updated(){
    this.$refs.swiper.slideCount = this.banners.length;
  },
  data() {
    return {
      isLoad:false
    };
  },
  methods:{
    imageLoad(){
      !this.isLoad&&this.$emit('swiperImageLoad');
      this.isLoad = true
    }
  }
};
</script>
