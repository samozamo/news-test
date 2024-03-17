<template>
  <main>
    <h1>News from around the world!</h1>
    <ul>
      <li v-for="country in countries" :key="country.code">
        <button>
          {{ country.label }}
        </button>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const countries = [
  {
    label: "US",
    code: "us",
  },
  {
    label: "UK",
    code: "gb",
  },
  {
    label: "France",
    code: "fr",
  },
  {
    label: "Australia",
    code: "au",
  },
  {
    label: "India",
    code: "in",
  },
];
</script>

<style></style>
