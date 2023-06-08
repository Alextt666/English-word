<template>
  <div class="body-title">
    <h3>{{ $route.name }} Section</h3>
    <div class="mode-select" v-if="$route.name == 'Begin'">
      <template v-for="item of modes" :key="item">
        <div
          :class="['mode-item', isActive == item ? 'mode-item-active' : '']"
          @click="activeMode(item)"
        >
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const modes = ["random", "/", "desc", "/", "asce"];

const isActive = ref("random");
function activeMode(item) {
  if (item != "/") {
    isActive.value = item;
  }
}
</script>

<style lang="scss" scoped>
.body-title {
  height: 4rem;
  padding-left: 2rem;
  line-height: 4rem;
  display: flex;
  justify-content: space-between;
  h3 {
    color: $bg-dark;
  }
  .mode-select {
    margin-right: 2rem;
    display: flex;
    .mode-item {
      padding: 0 5px;
      cursor: pointer;
      font-size: 15px;
      color: $bg-dark;
    }
    .mode-item-active {
      font-weight: 600;
    }
  }
}
</style>
