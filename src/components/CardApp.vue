<template>
    <section>
      <div>
        <div class="card mt-1 " style="width: 21rem;" v-for="movie in movies" :key="movie.id">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <img :src="'https://image.tmdb.org/t/p/w300' + movie.backdrop_path" alt="logo-film">
            <h6 class="card-subtitle mb-2 mt-2 text-muted">Categories: Film</h6>
            <h6 class="card-subtitle mb-2 mt-2 text-muted"> Title: {{ movie.title }}</h6>
            <p class="card-text">Language: {{ movie.original_language }}</p>
            <p class="card-text">Rating: {{ movie.vote_average }}</p>
            <p>Release Date: {{ movie.release_date }}</p>
          </div>
        </div>
      </div>
        <div class="mt-4">
        <div class="card" style="width: 21rem;" v-for="series in series" :key="series.id">
          <div class="card-body">
            <h5 class="card-title">{{ series.name }}</h5>
            <img :src="'https://image.tmdb.org/t/p/w300' + series.poster_path" alt="logo-serie">
            <h6 class="card-subtitle mb-2 mt-2 text-muted">Categories: SerieTv</h6>
            <h6 class="card-subtitle mb-2">Name: {{ series.name }}</h6>
            <p class="card-text">Language: {{ series.original_language }}</p>
            <p class="card-text">Rating: {{ series.vote_average }}</p>
            <p>First Air Date: {{ series.first_air_date }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
            movies: Array,
            series: Array,
    },
  };
  </script>
<style lang="scss" scoped>

</style>  