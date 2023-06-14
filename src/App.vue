<template>
  <div class="page-wrapper">
    <HeaderNav></HeaderNav>
    <SideBar></SideBar>
    <BodyPage></BodyPage>
  </div>
</template>
<script setup>
import HeaderNav from "comp/HeaderNav.vue";
import SideBar from "comp/SideBar/SideBar.vue";
import BodyPage from "comp/BodyPage/BodyPage.vue";
import { defineComponent } from "vue";

defineComponent({
  HeaderNav,
  BodyPage,
  SideBar,
});
</script>
<style lang="scss">
// 整体页面
.page-wrapper {
  position: relative;
}
</style>
