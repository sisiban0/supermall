<template>
  <div class="wrapper" ref="wrapper" :style="{height:height+'px'}">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    height: {
      default() {
        return 0;
      }
    },
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      this.scroll.on("scroll", pos => {
        this.$emit("scroll", pos);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pulling-up");
      });
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  overflow: hidden;
}
</style>