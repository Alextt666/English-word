<template>
  <div class="page-body">
    <BodyTitle></BodyTitle>
    <Suspense>
      <!-- 具有深层异步依赖的组件 -->
      <router-view></router-view>
      <!-- 在 #fallback 插槽中显示 “正在加载中” -->
      <template #fallback> Loading... </template>
    </Suspense>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import BodyTitle from "./BodyTitle.vue";
</script>

<style lang="scss" scoped>
// 主体区域
.page-body {
  margin-top: 4.5rem;
  margin-left: 258px;
  min-height: calc(100vh - 4.5rem);
  height: calc(100vh - 4.5rem);
  position: relative;
  transition: 0.8s all;
}
</style>
