<template>
  <div class="begin-wrapper">
    <div class="card-img">
      <div>
        <img class="card-img-item" :src="imgUrl" alt="img" />
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
const rotate = ref(0);
const count = ref(0);
const imgUrl = computed(() => IMG_LIST[count.value].url);
// 下一张
function nextWord() {

  const cardImg = document.querySelector(".card-img");
  const imgItem = document.querySelector(".card-img-item");
  rotate.value = rotate.value == 0 ? 180 : 0;
  if (count.value < IMG_LIST.length - 1) count.value++;
  if (rotate.value == 180) {
    imgItem.style.transform = `rotateY(180deg)`;
  } else {
    imgItem.style.transform = `rotateY(0deg)`;
  }
  cardImg.style.transform = `rotateY(${rotate.value}deg)`;
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
  .card-img {
    flex: 2;
    margin: 0 1rem;
    min-width: 32rem;
    box-shadow: 0 0 10px #ccc;
    background-color: $bg-base;
    border-radius: 10px;
    transition: all 3s;
    &-item {
      width: 3rem;
      transition: all 5s;
    }
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
