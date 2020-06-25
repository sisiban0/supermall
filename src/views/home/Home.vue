<template>
  <div id="home">
    <nav-bar bg-color="#ff8198">
      <span slot="center">首页</span>
    </nav-bar>
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControlCopy"
      class="tab-control-copy"
      v-show="isTabFixed"
    />
    <scroll
      :pull-up-load="true"
      :height="clientHeight"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pulling-up="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature />
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl" />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBacktoTop"></back-top>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
import TabControl from "content/TabControl/TabControl";
import GoodsList from "content/Goods/GoodsList";
import Scroll from "common/scroll/Scroll";
import BackTop from "content/BackTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { deboucne } from "@/common/utils";
export default {
  name: "Home",
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  mounted() {
    this.clientHeight = document.body.clientHeight - 93;
    let deScroll = deboucne(this.$refs.scroll.refresh, 100);
    this.$bus.$on("itemImageLoad", () => {
      deScroll();
    });
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      clientHeight: 0,
      isShowBacktoTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.current = index;
      this.$refs.tabControlCopy.current = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(pos) {
      this.isShowBacktoTop = -pos.y > 1000;

      this.isTabFixed = -pos.y > this.tabOffsetTop - 44;
    },
    loadMore() {
      console.log("加载更多");
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>
<style scoped lang="scss">
#home {
  .content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .tab-control-copy {
    position: fixed;
    width: 100%;
    top: 44px;
    z-index: 11;
  }
}
</style>