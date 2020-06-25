<template>
  <div class="tab-control">
    <div
      :class="['tab-control-item',{'active':index===current}]"
      v-for="(item,index) in titles"
      :key="index"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    tabClick(index) {
      this.current = index;
      this.$emit("tabClick",index)
    }
  }
};
</script>
<style scoped lang="scss">
.tab-control {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: white;
  .tab-control-item {
    flex: 1;
    &.active {
      color: var(--color-high-text);
      span {
        border-bottom: 3px solid var(--color-tint);
        padding: 2px;
      }
    }
  }
}
</style>