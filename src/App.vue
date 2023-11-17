<template>
  <div>
    <header class="d-flex justify-content-between align-items-center bg-black">
      <HeaderApp @searchMovie="handleSearch" />
    </header>
    <main>
      <section id="movie" >
        <h2 class="py-3 text-white">Film</h2>
        <div class="row gy-3">
          <div class="card-width col-12 col-md-4 col-lg-3">
            <TransitionGroup name="card">
              <CardApp :movies="store.movieList" />
            </TransitionGroup>
          </div>
        </div>
      </section>

      <section id="series" >
        <h2 class="py-3 text-white">SerieTv</h2>
        <div class="row gy-3">
          <div class="card-width col-12 col-md-4 col-lg-3">
            <TransitionGroup name="card">
              <CardApp :series="store.seriesList" />
            </TransitionGroup>
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
    }
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
    getMostPopularMovies() {
      const mostPopularUrl = this.store.apiUrl + 'movie/popular';
      axios.get(mostPopularUrl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.mostPopularMovies = res.data.results;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
main{
  overflow-y: hidden;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 15px;
}

.card-title {
  margin-bottom: 0.5rem;
  color: white;
}

.card-text {
  font-size: 0.9rem;
  color: white;
  height: 500px;
}
body {
  background-color: #141414;
    color: white;
    font-family: 'Arial', sans-serif;
}

#movie,
#series {
  min-height: 400px;
  background-color: #141414; 
}

.card {
  background-color: #2b2b2b; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
}

  main {
    overflow-y: hidden;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  </style>