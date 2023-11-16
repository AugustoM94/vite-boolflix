<template>
  <div>
    <header class="d-flex justify-content-between align-items-center bg-black">
      <HeaderApp @searchMovie="handleSearch" />
    </header>
    <main >
      <section id="movie" class="container">
        <h2 class="py-3">Film</h2>
        <div class="row gy-3 ">
        <div class="card-width col-12 col-md-4 col-lg-3">
          <CardApp :movies="store.movieList" />
        </div>    
      </div>
      </section>
     <section id="series" class="container">
      <h2 class="py-3">Serie</h2>
      <div class="row gy-3">
        <div class="card-width  col-12 col-md-4 col-lg-3">
          <CardApp :series="store.seriesList" />
        </div>    
      </div>
    </section>

      </main>

  </div>
</template>

<script>
import { store } from './assets/data/store';
import HeaderApp from './components/HeaderApp.vue';
import CardApp from './components/CardApp.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderApp,
    CardApp,
    
  },
  data() {
    return {
      
           store,
    };
  },
  methods: {
    getMoviesAndSeries() {
      const movieUrl = this.store.apiUrl + this.store.endPoint.movies;
      axios.get(movieUrl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results;
      });

      const seriesUrl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(seriesUrl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results;
      });   
    },
    handleSearch(query) {
      this.store.params.query = query;
      this.getMoviesAndSeries();
    },
  },
};
</script>
<style lang="scss" scoped>
.card-width  {
  width: calc(100% / 5);
}
  </style>