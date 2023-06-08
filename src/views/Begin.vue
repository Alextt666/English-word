<template>
  <div class="begin-wrapper">
    <div class="card-img"></div>
    <div class="card-words"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.begin-wrapper {
  padding: 30px;
  margin: 10px 2.5rem;
  display: flex;
  height: 68%;
  justify-content: center;
  transition: 1s all;
  .card-img {
    flex: 2;
    margin: 0 1rem;
    min-width: 32rem;
    box-shadow: 0 0 10px #ccc;
    background-color: $bg-base;
    border-radius: 10px;
  }
  .card-words {
    flex: 1;
    margin: 0 1rem;
    min-width: 14rem;
    box-shadow: 0 0 10px #ccc;
    border-radius: 10px;
    background-color: $bg-base;
  }
}
</style>
