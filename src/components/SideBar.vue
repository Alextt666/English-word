<template>
  <div class="sidebar-wrapper">
    <div class="logo-wrapper">
      <img src="@/assets/images/logo.png" alt="Logo" />
    </div>
    <template v-for="tag in tags" :key="tag">
      <div class="sidebar-main">
        <div class="main-items main-title">{{ tag }}</div>
        <div class="main-items">
          <div>
            <img :src="`src/assets/images/${tag}.svg`" alt="icon" /> {{ tag }}
          </div>
          <div class="arrow">
            <img
              src="@/assets/images/arrow-right.svg"
              alt="arrow"
              style="width: 12px; vertical-align: bottom"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const tags = reactive(["General", "Begin", "Help"]);
</script>

<style lang="scss" scoped>
// 侧边栏
.sidebar-wrapper {
  position: fixed;
  height: 100%;
  top: 0;
  z-index: 9;
  background-color: $bg-base;
  width: 258px;
  box-shadow: 0 0 21px rgba(89, 102, 122, 0.1);
  // logo
  .logo-wrapper {
    padding: 28px 30px;
    img {
      width: 100%;
      height: auto;
    }
  }
  // 侧边栏区域
  .sidebar-main {
    .main-items {
      padding: 15px 20px;
      letter-spacing: 0.7px;
      font-family: roboto, sans-serif;
      text-transform: capitalize;
      color: #2c323f;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 24px;
        vertical-align: bottom;
        margin: 0 10px 0 20px;
      }
      .arrow {
        display: inline-block;
      }
    }
    .main-title {
      background-color: $block-bg;
      font-weight: 700;
      font-size: 16px;
      color: $bg-dark;
      margin: 10px 20px;
      border-radius: 10px;
      cursor: default;
    }
  }
}
</style>
