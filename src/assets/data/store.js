// store.js
import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/',
  endPoint: {
    movies: 'search/movie',
    series: 'search/tv',
  },
  params: {
    api_key: '8e54bd6b4cea1826ba363b44600af80c',
    query: 'a',
  },
  error: '',
  loading: true,
  movieList: [],
  seriesList: [],
});
