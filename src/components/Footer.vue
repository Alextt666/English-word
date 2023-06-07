<template>
  <footer class="page-footer">
    <div class="page-footer-row">
      <div class="page-footer-row-copyright">Copyright 2023 © Alexzhang</div>
      <div class="page-footer-row-icon">
        <img src="@/assets/images/heart-fill.svg" alt="" />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
// 底部版权
.page-footer {
  position: absolute;
  max-width: 100vw;
  width: 100%;
  bottom: 0;
  z-index: 8;
  transition: 0.5s;
  box-shadow: 0 0 20px rgba(89, 102, 122, 0.1);
  .page-footer-row {
    width: 100%;
    height: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $bg-base;
    font-family: rubik, sans-serif;
    &-copyright {
      font-size: 13px;
      line-height: 1.7;
      letter-spacing: 0.7px;
      margin-left: 20px;
    }
    &-icon {
      img {
        margin-right: 20px;
        width: 24px;
      }
    }
  }
}
</style>
