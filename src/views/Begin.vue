<template>
  <div class="begin-wrapper">
    <div class="card-img flex-center">
      <div class="card-img-title">Some Word</div>
      <div class="card-img-item">
        <img :src="imgUrl" alt="img" />
      </div>
    </div>
    <div class="card-words">
      <button @click="nextWord">next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { IMG_LIST } from "@/components/Begin/imgUrl.js";
const count = ref(0);
const imgUrl = computed(() => IMG_LIST[count.value].url);
// 下一张
function nextWord() {
  if (count.value < IMG_LIST.length - 1) count.value++;
}
</script>

<style lang="scss" scoped>
.begin-wrapper {
  padding: 30px;
  margin: 10px 2.5rem;
  display: flex;
  height: 68%;
  justify-content: center;
  transition: 1s all;
  // 图片区域
  .card-img {
    flex: 2;
    margin: 0 1rem;
    min-width: 32rem;
    box-shadow: 0 0 10px #ccc;
    background-color: $bg-base;
    border-radius: 10px;
    flex-direction: column;
    &-item {
      margin-top: 2rem;
      img {
        width: 28rem;
      }
    }
  }
  // 属于区域
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
