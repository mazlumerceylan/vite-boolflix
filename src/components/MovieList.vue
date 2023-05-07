<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <h3>{{ movie.title }}</h3>
      <p><strong>Titolo Originale:</strong>     {{ movie.original_title }}</p>
      <p>
        <strong>Lingua:</strong>
        <span v-if="movie.original_language === 'it'">
          <img src="src/assets/images/flags/it.png" alt="Italian flag" width="20" height="20">
          {{ movie.original_language }}
        </span>
        <span v-else-if="movie.original_language === 'en'">
          <img src="src/assets/images/flags/en.png" alt="English flag" width="20" height="20">
          {{ movie.original_language }}
        </span>
        <span v-else>
          {{ movie.original_language }}
        </span>
      </p>
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

@import 'src/scss/MovieList.scss';

</style>