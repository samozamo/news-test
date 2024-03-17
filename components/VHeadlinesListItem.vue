<template>
  <article class="headline">
    <a :href="props.article.url">
      <h4 class="headline__title">{{ props.article.title }}</h4>
      <div class="headline__detail-group">
        <p class="headline__author">Author: {{ props.article.author }}</p>
        <p class="headline__source">Source: {{ props.article.source.name }}</p>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ article: Article }>();
</script>

<style scoped>
a {
  color: currentColor;
  text-decoration: none;
}

a:hover .headline__title {
  text-decoration: underline;
}

.headline {
  line-height: 1.5;
  padding: 1rem;
}

.headline__title {
  font-size: 1.25rem;
}

.headline__detail-group {
  color: #666;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}
</style>
