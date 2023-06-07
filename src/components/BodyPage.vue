<template>
  <div class="page-body">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from './Footer.vue'
</script>

<style lang="scss" scoped>
// 主体区域
.page-body {
  margin-top: 4.5rem;
  margin-left: 258px;
  min-height: calc(100vh - 4.5rem);
  position: relative;
  transition: .8s all;
}
</style>
