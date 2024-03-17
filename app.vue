<template>
  <main class="page-wrapper">
    <h1>News from around the world!</h1>
    <ul class="country-list">
      <li v-for="country in countries" :key="country.code">
        <button @click="handleCountryClick(country.code)">
          {{ country.label }}
        </button>
      </li>
    </ul>
    <ul class="headline-list">
      <li v-for="article in data?.articles">
        <HeadlinesListItem :article="article"></HeadlinesListItem>
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

h1 {
  font-size: 2rem;
  text-align: center;
  margin-block: 4rem;
}

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

.country-list {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
