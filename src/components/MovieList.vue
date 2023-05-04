<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <h3>{{ movie.title }}</h3>
      <p><strong>Titolo Originale:</strong> {{ movie.original_title }}</p>
      <p><strong>Lingua:</strong> {{ movie.original_language }}</p>
      <p><strong>Voto:</strong> {{ movie.vote_average }}/10</p>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
