<template>
  <div class="begin-wrapper">
    <CardImg
      :imgUrl="imgUrl"
      :word="word"
      @onCheck="
        (value) => {
          checkAnswer(value);
        }
      "
    ></CardImg>
    <button @click="handleNext">next</button>
  </div>
</template>

<script setup>
import CardImg from "@/components/Begin/CardImg.vue";
import { useInitEffect } from "../components/Begin/useInit";

// Blur-Card相关全部逻辑
// 需要共用同一个示例
const { nextWord, imgUrl, word, checkAnswer } = useInitEffect();

// 下一张
const handleNext = () => {
  nextWord();
  return;
};
</script>

<style lang="scss" scoped>
.begin-wrapper {
  padding: 30px;
  margin: 10px 2.5rem;
  display: flex;
  height: 68%;
  justify-content: center;
  transition: 1s all;
}
</style>
