<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "Backtop",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.back-top{
  position: fixed;
  z-index: 10;
  bottom: 55px;
  right: 10px;
  width: 43px;
  img{
    width: 100%;
  }
}
</style>>