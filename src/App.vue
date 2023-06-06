<template>
  <div class="page-wrapper">
    <header class="page-header">
      <div class="header-wrapper">
        <div class="header-icon">
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
    </header>
    <div class="sidebar-wrapper">
      <div class="logo-wrapper">
        <img src="./assets/images/logo.png" alt="Logo" />
      </div>
      <div class="sidebar-main">
        <div class="main-items main-title">General</div>
        <div class="main-items">
          <div><img src="./assets/images/home.svg" alt="" /> Dashboards</div>
          <div class="arrow">
            <img
              src="./assets/images/arrow-right.svg"
              alt="arrow"
              style="width: 12px; vertical-align: bottom"
            />
          </div>
        </div>
        <div class="main-items main-title">Begin</div>
        <div class="main-items">
          <div><img src="./assets/images/add.svg" alt="" /> Begin</div>
          <div class="arrow">
            <img
              src="./assets/images/arrow-right.svg"
              alt="arrow"
              style="width: 12px; vertical-align: bottom"
            />
          </div>
        </div>
        <div class="main-items main-title">Help</div>
        <div class="main-items">
          <div><img src="./assets/images/book.svg" alt="" /> Help</div>
          <img
            src="./assets/images/arrow-right.svg"
            alt="arrow"
            style="width: 12px; vertical-align: bottom"
          />
        </div>
      </div>
    </div>
    <footer class="page-footer">
      <div class="page-footer-row">
        <div class="page-footer-row-copyright">Copyright 2023 © Alexzhang</div>
        <div class="page-footer-row-icon">
          <img src="./assets/images/heart-fill.svg" alt="" />
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup></script>
<style lang="scss">
// 整体页面
.page-wrapper {
  position: relative;
}
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
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: $bg-base;
    .header-icon {
      display: flex;
      margin-right: 5rem;
      box-sizing: border-box;
      div {
        margin-right: 1rem;
      }
    }
  }
}

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

// 底部版权
.page-footer {
  position: fixed;
  max-width: 100vw;
  width: 100%;
  bottom: 0;
  z-index: 8;
  transition: 0.5s;
  box-shadow: 0 0 20px rgba(89, 102, 122, 0.1);
  .page-footer-row {
    width: calc(100% - 258px);
    margin-left: 258px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: $bg-base;
    font-family: rubik, sans-serif;
    &-copyright {
      font-size: 13px;
      line-height: 1.7;
      letter-spacing: 0.7px;
    }
    &-icon {
      transform: translateX(7rem);
      img {
        width: 24px;
      }
    }
  }
}
</style>
