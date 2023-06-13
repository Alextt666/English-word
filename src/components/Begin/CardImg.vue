<template>
  <div class="card-img flex-center">
    <div class="card-img-title flex-center">
      <h2 :class="['title-word', !isBlur ? 'blur-item' : '']">{{ word }}</h2>
      <TitleToggle @onchange="(res) => (isBlur = res)"></TitleToggle>
    </div>
    <div class="card-img-item">
      <img :src="imgUrl" alt="img" />
    </div>
    <div class="card-input">
      <EditInput
        v-model:input-title="inputText"
        placeholder="Check your answer"
        @keyup.enter="handleCheck"
      ></EditInput>
    </div>
  </div>
</template>

<script setup>
import EditInput from "./EditInput.vue";
import TitleToggle from "./TitleToggle.vue";
import { useInitEffect } from "./useInit";
import { ref } from "vue";
const inputText = ref("");
const props = defineProps({
  imgUrl: {
    type: String,
  },
  word: {
    type: String,
  },
});

const emits = defineEmits(["onCheck"]);
const handleCheck = () => {
  emits("onCheck",inputText.value);
};
// 模糊组件控制 与 当前示例数据无关 
const { isBlur } = useInitEffect();
</script>

<style lang="scss" scoped>
// 图片区域
.card-img {
  margin: 0 1rem;
  min-width: 42rem;
  box-shadow: 0 0 10px #ccc;
  background-color: $bg-base;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;

  &-item {
    width: 24rem;
    min-height: 15rem;
    height: 18rem;
    border-radius: 5px;
    box-shadow: 0 0 12px #616161;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  &-title {
    width: 80%;
    padding: 2rem 0;
    position: relative;
  }
}
.card-input {
  margin-top: 1.5rem;

  input {
    border-bottom: 1px solid $bg-dark;
    font-size: 1.5rem;
    text-align: center;
  }
  input::-webkit-input-placeholder {
    color: #cccacab2;
  }
}
</style>
