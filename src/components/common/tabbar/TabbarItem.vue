<template>
  <li class="tab-bar-item" @click="handClick" :class="{'is-active':active}" :style="activeStyle">
    <div class="bar-icon-box">
      <slot name="icon-active" v-if="active"></slot>
      <slot name="icon" v-else></slot>
    </div>
    <div class="bar-item-text">
      <slot name="text"></slot>
    </div>
  </li>
</template>
<script>
export default {
  name: "tabbarItem",
  data() {
    return {
      defaultColor: "#303133"
    };
  },
  props: {
    index: {
      defalut: null
    }
  },
  computed: {
    active() {
      return this.index === this.rootTabBar.active;
    },
    activeStyle() {
      return this.active &&
        this.rootTabBar.activeTextColor
        ? { color: this.rootTabBar.activeTextColor }
        : {};
    }
  },
  inject: ["rootTabBar"],
  methods: {
    handClick() {
      this.rootTabBar.active = this.index;
      this.rootTabBar.router && this.$router.push(this.index);
      this.dispatch("tabBar", "select", this.index);
    },
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  }
};
</script>
<style lang="scss" scoped>
li.tab-bar-item {
  text-align: center;
  color: #303133;
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  &.is-active {
    color: #409eff;
  }
  & > div.bar-icon-box img {
    width: 24px;
    height: 24px;
  }
}
</style>