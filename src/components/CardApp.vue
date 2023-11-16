<template>
    <section>
      <div class="d-flex  card-width">
        <div class="card mt-1 " v-for="movie in movies" :key="movie.id">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <img :src="'https://image.tmdb.org/t/p/w342' + movie.backdrop_path" alt="logo-movie">
            <h6 class="card-subtitle mb-2 mt-2 text-muted">Categories: Film</h6>
            <h6 class="card-subtitle mb-2 mt-2 text-muted"> Title: {{ movie.title }}</h6>
            <p class="card-text">
              <span>Language:</span>
              <img class="img-flag" :src="getFlagPath(movie.original_language)" :alt="logo">
            </p>
            <div class="star-rating">
              <i v-for="star in getStarArray(movie.vote_average)" :key="star" class="fa-solid fa-star" style="color: #c0cd0e;"></i>        
            </div>           
               <p class="mt-1">Release Date: {{ movie.release_date }}</p>

          </div>           
          </div>
        </div>
        <div class="mt-4 d-flex card-width">
        <div class="card" v-for="series in series" :key="series.id">
          <div class="card-body">
                <h5 class="card-title">{{ series.name }}</h5>
                <img :src="'https://image.tmdb.org/t/p/w342' + series.poster_path" alt="logo-serie">
                <h6 class="card-subtitle mb-2 mt-2 text-muted">Categories: SerieTv</h6>
                <h6 class="card-subtitle mb-2">Name: {{ series.name }}</h6>
                <p class="card-text">        
                  <span>Language:</span>
                  <img class="img-flag" :src="getFlagPath(series.original_language)" :alt="logo">
                </p>
            <div class="star-rating">
                <i v-for="star in getStarArray(series.vote_average)" :key="star" class="fa-solid fa-star" style="color: #c0cd0e;"></i>                  
            </div>    
            <p class="mt-1">Release Date: {{ series.release_date }}</p>       
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import '@fortawesome/fontawesome-free/css/all.css';

  export default {
    data(){
      return{
        flags:[
                'en',
                'es',
                'fr',
                'it',
                'de',
                'ca',
                'gb',
                'jp',
                'kr',

        ]
      }
    },
    props: {
            movies: Array,
            series: Array,
    },
    methods: {
    getFlagPath(language) {
      return this.flags.includes(language) ? `/flags/${language}.svg` : '/flags/undefined.svg';
    },
    getRoundedRating(rating) {
      return Math.min(Math.max(Math.ceil(rating / 2), 1), 5);
    },
    getStarArray(rating) {
      return Array.from({ length: this.getRoundedRating(rating) });
    },
  },
  };
  </script>
<style lang="scss" scoped>
.card {
  min-width: 400px;
}
.card-width  {
  width: calc(100% / 5);
}

.img-flag{
  max-width: 20px;
  margin-left: 5px;
}

</style>  