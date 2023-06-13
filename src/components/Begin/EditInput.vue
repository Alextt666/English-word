<template>
  <input type="text" :value="inputTitle" v-focus @input="onInputChange" v-bind="$attrs" />
</template>

<script setup>
const props = defineProps({
  inputTitle: {
    type: String,
    require: true,
  },
});
const emits = defineEmits(["update:inputTitle"]);
const onInputChange = (e) => {
  emits("update:inputTitle", e.target.value);
};
</script>

<style lang="scss" scoped></style>
