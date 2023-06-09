<template>
  <div class="title-toggle" @click="toggle">
    <img src="@/assets/images/toggle-on.svg" alt="toggle" v-show="curShow" />
    <img src="@/assets/images/toggle-off.svg" alt="toggle" v-show="!curShow" />
  </div>
</template>

<script setup>
import {ref } from 'vue';
const curShow = ref(false);
const emits = defineEmits(['onchange'])
function toggle(){
    curShow.value = !curShow.value
    emits('onchange',curShow.value);

}
</script>

<style lang="scss" scoped>
.title-toggle {
  position: absolute;
  right: 2rem;
  cursor: pointer;
}
</style>
