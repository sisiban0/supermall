<template>
  <div>
    <nav-bar bg-color="#ff8198">
      <span slot="center">分类</span>
    </nav-bar>
    <div class="wrapper">
      <ul class="content">
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表</li>
        <li>分类列表100</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

import NavBar from "common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar
  },
  mounted() {
    this.bs = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true
    });
    // this.bs.on("scroll", pos => {
    //   console.log(pos);
    // });
    this.bs.on("pullingUp", () => {
      console.log('下拉刷新');
    });
  },
  data() {
    return {
      bs: null
    };
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
  // overflow: auto;
}
</style>