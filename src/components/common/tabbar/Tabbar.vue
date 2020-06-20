<template>
  <ul class="tab-bar">
    <slot></slot>
  </ul>
</template>
<script>
import TabbarItem from "./TabbarItem";
export default {
  name: "tabBar",
  props: {
    defaultActive: {
      type: String,
      default() {
        return 0;
      }
    },
    activeTextColor: {
      type: String
    },
    router: {
      type: Boolean,
      defalut() {
        return false;
      }
    }
  },
  componentName: "tabBar",
  provide() {
    return {
      rootTabBar: this
    };
  },
  watch: {
    defaultActive(val) {
      this.active = val;
    }
  },
  data() {
    return {
      active: this.defaultActive
    };
  }
};
</script>
<style lang="scss" scoped>
ul.tab-bar {
  list-style: none;
  display: flex;
  justify-content: space-around;
  height: 49px;
  position: fixed;
  bottom: 0;
  background-color: #ebebeb;
  align-items: center;
  width: 100%;
  box-shadow: 0 -1px 5px rgba(100, 100, 100, 0.2);
}
</style>