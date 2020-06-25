<template>
  <div id="app">
    <router-view></router-view>
    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from "content/MainBar/MainBar";

export default {
  name: "App",
  components: {
    MainBar
  }
};
</script>

<style>
@import "assets/css/base.css";
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
