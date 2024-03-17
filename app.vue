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
    <div class="user-info" v-if="isLoading">
      <p>Loading some exciting news!</p>
    </div>
    <div class="user-info" v-else-if="data === null">
      <p>Please choose a country.</p>
      <p v-if="error" class="user-info__error">{{ error }}</p>
    </div>
    <ul v-else class="headline-list">
      <li v-for="article in data?.articles">
        <VHeadlinesListItem :article="article"></VHeadlinesListItem>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
type HeadlineResponse =
  | {
      success: true;
      data: TopHeadlinesResponse;
    }
  | {
      success: false;
      message: string;
    };

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

const isLoading = ref(false);
const data = ref<TopHeadlinesResponse | null>(null);
const error = ref<string | null>(null);

const handleCountryClick = async (code: string) => {
  isLoading.value = true;

  data.value = null;
  error.value = null;

  const response = await $fetch<HeadlineResponse>("/api/fetchTopHeadlines", {
    query: {
      country: code,
    },
  });

  if (response.success === false) {
    error.value = response.message;
  } else {
    data.value = response.data;
  }

  isLoading.value = false;
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

.headline-list {
  margin-top: 2rem;

  li {
    display: block;
  }

  li + li {
    border-top: 1px #666 solid;
  }
}

.user-info {
  text-align: center;
  margin: 3rem;
}

.user-info__error {
  color: #f00;
  margin-top: 1rem;
}
</style>
