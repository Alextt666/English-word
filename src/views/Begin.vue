<template>
  <div class="begin-wrapper">
    <div class="card-img flex-center">
      <div class="card-img-title flex-center">
        <h2 :class="['title-word', !isBlur? 'blur-item' : '']">{{ word }}</h2>
        <div class="title-toggle">
          <img
            src="@/assets/images/toggle-on.svg"
            alt="toggle"
            v-show="isBlur"
            @click="() => (isBlur = !isBlur)"
          />

          <img
            src="@/assets/images/toggle-off.svg"
            alt="toggle"
            v-show="!isBlur"
            @click="() => (isBlur = !isBlur)"
          />
        </div>
      </div>
      <div class="card-img-item">
        <img :src="imgUrl" alt="img" />
      </div>
      <div class="card-input">
        <input type="text" v-focus  placeholder="Check your answer" @keyup.enter="checkAnswer" v-model="inputText"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { IMG_LIST } from "@/components/Begin/imgUrl.js";
const count = ref(0);
const isBlur = ref(false);
const inputText = ref('');
const imgUrl = computed(() => IMG_LIST[count.value]?.url || "");
const word = computed(() => IMG_LIST[count.value]?.word || "nothing");

// 下一张
function nextWord() {
  if (count.value < IMG_LIST.length - 1) count.value++;
}
// 校验答案
function checkAnswer(){
  console.log(inputText.value);
  ElMessage.success('Bingo!');
  
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
    margin: 0 1rem;
    min-width: 42rem;
    box-shadow: 0 0 10px #ccc;
    background-color: $bg-base;
    border-radius: 10px;
    flex-direction: column;
    justify-content: flex-start;

    &-item {
      img {
        width: 28rem;
      }
    }
    &-title {
      width: 80%;
      padding: 2rem 0;
      position: relative;
      .title-toggle {
        position: absolute;
        right: 2rem;
        cursor: pointer;
      }
    }
  }
}
.card-input {
  margin-top: 2rem;
  input {
    border-bottom: 1px solid $bg-dark;
    font-size: 1.5rem;
    text-align: center;
  }
  input::-webkit-input-placeholder {  
  color: #cccacab2;  
}  
}

.blur-item{
  filter: blur(10px);
}
</style>
