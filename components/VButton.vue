<template>
  <button :class="props.selected && 'selected'">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ selected: boolean }>();
</script>

<style scoped>
button {
  border: 1px #000 solid;
  padding: 0.5rem;
  background-color: #fff;
  cursor: pointer;
}

button:hover,
button.selected {
  background-color: #000;
  color: #fff;
}
</style>
