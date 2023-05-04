<template>
  <header>
    <div class="logo">Logo</div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchInput"
        placeholder="Cerca film..."
      />
      <button @click="search">Cerca</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    search() {
      this.$store.commit('setSearchQuery', this.searchInput);
      this.$store.dispatch('searchMovies');
    },
  },
};
</script>


<style lang="scss" scoped>


</style>
