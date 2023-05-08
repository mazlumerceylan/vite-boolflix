<template>
  <header>
    <div class="logo" @click="reloadPage">
      <img src="src/assets/images/logo/logo-boolflix.png" alt="LOGO" />
    </div>
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
      this.$store.dispatch('searchContent');
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>


<style lang="scss" scoped>

@import 'src/scss/Header.scss';
</style>
