<template>
  <header class="page-header">
    <div class="header-wrapper">
      <div class="header-icon">
        <div></div>
        <div></div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
// 顶部导航
.page-header {
  position: fixed;
  max-width: 100vw;
  width: 100%;
  top: 0;
  z-index: 8;
  transition: 0.5s;
  box-shadow: 0 0 20px rgba(89, 102, 122, 0.1);
  .header-wrapper {
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: $bg-base;
    .header-icon {
      display: flex;
      margin-right: 2rem;
      box-sizing: border-box;
      div {
        margin-right: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-image: url("../assets/images/github.svg");
        background-size: 50% auto;
        background-repeat: no-repeat;
        background-position: center center;
        background-color: $block-bg;
      }
      div:nth-child(1) {
        background-image: url("../assets/images/moon.svg");
      }
    }
  }
}
</style>
