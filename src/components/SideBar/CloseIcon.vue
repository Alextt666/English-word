<template>
  <div :class="['icon-close', position]">
    <img :src="loadPath" alt="collapes" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  svgName: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    default: "top-right",
  },
});
const loadPath = ref(`src/assets/images/${props.svgName}.svg`);
</script>

<style lang="scss" scoped>
.icon-close {
  width: 16px;
  position: absolute;
  cursor: pointer;
}
.top-right {
  top: 0.8rem;
  right: 1rem;
}
.center { 
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
