<template>
  <div>
    <tab-bar active-text-color="red" router :default-active="currentIndex" @select="handleSelect">
      <tab-bar-item v-for="(item,index) in menuList" :key="index" :index="item.path">
        <template slot="icon">
          <img :src="item.icon" alt />
        </template>
        <template slot="icon-active">
          <img :src="item.activeIcon" alt />
        </template>
        <span slot="text">{{item.title}}</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "common/tabbar/Tabbar";
import TabBarItem from "common/tabbar/TabbarItem";
export default {
  name: "MainBar",
  data() {
    return {
      menuList: [
        {
          title: "首页",
          path: "/home",
          icon: require("assets/img/tabbar/home.png"),
          activeIcon: require("assets/img/tabbar/homered.png")
        },
        {
          title: "分类",
          path: "/category",
          icon: require("assets/img/tabbar/fenlei.png"),
          activeIcon: require("assets/img/tabbar/fenleired.png")
        },
        {
          title: "购物车",
          path: "/cart",
          icon: require("assets/img/tabbar/gwc.png"),
          activeIcon: require("assets/img/tabbar/gwcred.png")
        },
        {
          title: "我的",
          path: "/profile",
          icon: require("assets/img/tabbar/me.png"),
          activeIcon: require("assets/img/tabbar/mered.png")
        }
      ],
      currentIndex: "/home"
    };
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    handleSelect(index) {
      // console.log(index);
    }
  }
};
</script>

<style>
</style>
