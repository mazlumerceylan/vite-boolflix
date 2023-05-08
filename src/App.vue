<template>
  <div id="app">
    <Header />
    <MovieList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MovieList from './components/MovieList.vue';

export default {
  components: {
    Header,
    MovieList,
  },
  created() {
    this.$store.dispatch('fetchPopularMovies');
    // this.$store.dispatch('fetchPopularTVShows'); // Abilita questa riga se vuoi mostrare le serie TV più popolari invece dei film più popolari
  },

};
</script>

<style lang="scss" scoped>
@import 'src/scss/Header.scss';
@import 'src/scss/MovieList.scss';


</style>


