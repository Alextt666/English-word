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
    <footer class="page-footer">
      <div class="page-footer-row">
        <div class="page-footer-row-copyright">Copyright 2023 © Alexzhang</div>
        <div class="page-footer-row-icon">icon</div>
      </div>
    </footer>
  </div>
</template>
<script setup></script>
<style lang="scss">
.page-wrapper {
  position: relative;
}
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
    .header-icon{
        display: flex;
        margin-right: 5rem;
        box-sizing: border-box;
        div{
            margin-right: 1rem;
        }
    }
  }
}

.page-footer {
  position: fixed;
  max-width: 100vw;
  width: 100%;
  bottom: 0;
  z-index: 8;
  transition: 0.5s;
  box-shadow: 0 0 20px rgba(89, 102, 122, 0.1);
  .page-footer-row {
    width: 100%;
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
  }
}
</style>
