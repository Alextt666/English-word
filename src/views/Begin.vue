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
    <NextBtn @click="handleNext" ref="nextb"></NextBtn>
  </div>
</template>

<script setup>
import CardImg from "@/components/Begin/CardImg.vue";
import NextBtn from "@/components/Begin/NextBtn.vue";
import { useInitEffect } from "../components/Begin/useInit";
import { ref } from "vue";
// Blur-Card相关全部逻辑
// 需要共用同一个示例
const { nextWord, imgUrl, word, checkAnswer } = useInitEffect();
const nextb = ref(null);



// 下一张
const handleNext = () => {
  nextb.value.rightAnimate();
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
  position: relative;
}
</style>
