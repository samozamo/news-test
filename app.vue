<template>
  <main class="page-wrapper">
    <h1>News from around the world!</h1>
    <ul>
      <li v-for="country in countries" :key="country.code">
        <button @click="handleCountryClick(country.code)">
          {{ country.label }}
        </button>
      </li>
    </ul>
    <section>
      <HeadlinesListItem
        v-for="article in data?.articles"
        :article="article"
      ></HeadlinesListItem>
    </section>
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

const data = ref<TopHeadlinesResponse | null>(null);

const handleCountryClick = async (code: string) => {
  data.value = await $fetch("/api/fetchTopHeadlines", {
    query: {
      country: code,
    },
  });
};
</script>

<style>
.page-wrapper {
  margin: auto;
  padding-inline: 0.5rem;
}

@media screen and (min-width: 25rem) {
  .page-wrapper {
    padding-inline: 1rem;
  }
}

@media screen and (min-width: 40rem) {
  .page-wrapper {
    max-width: 40rem;
  }
}
</style>
