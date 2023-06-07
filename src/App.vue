<template>
  <div class="page-wrapper">
    <HeaderNav></HeaderNav>
    <SideBar></SideBar>
    <BodyPage></BodyPage>
  </div>
</template>
<script setup>
import HeaderNav from "./components/HeaderNav.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import BodyPage from "./components/BodyPage.vue";
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
