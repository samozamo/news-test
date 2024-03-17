<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  border: 1px #000 solid;
  padding: 0.5rem;
  background-color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #000;
  color: #fff;
}
</style>
