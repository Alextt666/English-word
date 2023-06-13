<template>
  <div class="next-btn flex-center" ref="nextbItem">
    <img src="@/assets/images/next-word.svg" alt="" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const nextbItem = ref(null);
const rightAnimate = () => {
  nextbItem.value.style.transform = `translate(.3rem,.2rem)`;
  setTimeout(() => {
    nextbItem.value.style.transform = `translate(0rem,0rem)`;
  }, 200);
  return;
};
defineExpose({ rightAnimate });
</script>

<style lang="scss" scoped>
  .next-btn {
    position: absolute;
    right: 10%;
    bottom: 6%;
    border-radius: 50%;
    box-shadow: 0 0 10px #ccc;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: all 0.5s;
    img {
      width: 2rem;
    }
  }
  .next-btn:hover {
    box-shadow: 0 0 10px #9e9d9d;
  }
</style>
