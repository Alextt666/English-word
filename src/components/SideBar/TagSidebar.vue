<template>
  <div class="sidebar-main">
    <div class="main-items main-title">{{ tagName }}</div>
    <div class="main-items" :data-type="tagName">
      <div>
        <img :src="`src/assets/images/${tagName}.svg`" alt="icon" />
        {{ tagName }}
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

<script setup>
const props = defineProps({
  tagName: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
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
</style>
