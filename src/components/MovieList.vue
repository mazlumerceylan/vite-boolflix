<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <div class="movie-poster">
        <img class="movie-poster" :src="getMoviePoster(movie.poster_path)" :alt="movie.title" />
      </div>
      <div class="movie-details">
        <h3>{{ movie.title }}</h3>
        <p><strong>Titolo Originale:  </strong> {{ movie.original_title }}</p>
        <p>
          <strong>Lingua:   </strong>
          <span v-if="movie.original_language === 'it'">
            <img src="src/assets/images/flags/it.png" alt="Italian flag" width="20" height="20">
          </span>
          <span v-else-if="movie.original_language === 'en'">
            <img src="src/assets/images/flags/en.png" alt="English flag" width="20" height="20">
          </span>
          <span v-else>
            {{ movie.original_language }}
          </span>
        </p>
        <p>
          <strong>Voto:</strong>
          <span class="rating">
            <template v-for="i in 5">
              <i v-if="i <= Math.ceil(movie.vote_average / 2)" class="fas fa-star"></i>
              <i v-else class="far fa-star"></i>
            </template>
          </span>
        </p> 
        <p>{{ movie.overview }}</p>
      </div>
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
  methods: {
    getMoviePoster(posterPath) {
      const baseUrl = "https://image.tmdb.org/t/p/";
      const imageSize = "w342";
      return `${baseUrl}${imageSize}${posterPath}`;
    },
  },
};
</script>

<style lang="scss" scoped>

@import 'src/scss/MovieList.scss';

</style>