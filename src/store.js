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
    async searchContent({ commit, state }) {
      try {
        // Ricerca film
        const movieResponse = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: 'e7ef597fab4f79bd04c0d1792de66f20',
              query: state.searchQuery,
              language: 'it-IT',
            },
          }
        );
        // Ricerca serie TV
      const tvResponse = await axios.get(
        'https://api.themoviedb.org/3/search/tv',
        {
          params: {
            api_key: 'e7ef597fab4f79bd04c0d1792de66f20',
            query: state.searchQuery,
            language: 'it-IT',
          },
        }
      );
      // Combina i risultati dei film e delle serie TV
      const combinedResults = [
        ...movieResponse.data.results,
        ...tvResponse.data.results,
      ];
     
        commit('setMovies', combinedResults);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    },
  },
  getters: {
    movies: (state) => state.movies,
  },
});

export default store;
