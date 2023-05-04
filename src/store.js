import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    searchQuery: '',
    movies: [],
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    async searchMovies({ commit, state }) {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: 'e7ef597fab4f79bd04c0d1792de66f20',
              query: state.searchQuery,
              language: 'it-IT',
            },
          }
        );
        commit('setMovies', response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
  getters: {
    movies: (state) => state.movies,
  },
});

export default store;
