<template>
  <div>
    <section>
      <div class="d-flex card-width h-100 px-2">
        <div v-for="movie in movies" :key="movie.id" class="card px-1" @mouseover="flipCard(movie.id, true)" @mouseleave="flipCard(movie.id, false)">           <div class="flip-card-inner" :class="{ flipped: flippedCards.includes(movie.id) }">
            <div class="flip-card-front">
              <img class="mt-2" :src="'https://image.tmdb.org/t/p/w342' + movie.backdrop_path" alt="logo-movie">
              <h6 class="card-subtitle mb-2 mt-2 text-muted text-white"> Title: {{ movie.title }}</h6>
            </div>
            <div class="flip-card-back">
              <div class="card-body">
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
                <div class="overview-scroll">
                  <p class="card-text" :class="{ 'scrollable': flippedCards.includes(movie.id) }">{{ movie.overview }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
  <div class="d-flex card-width h-100 px-2">
    <div v-for="serie in series" :key="serie.id" class="card px-1" @mouseover="flipCard(serie.id, true)" @mouseleave="flipCard(serie.id, false)">      <div class="flip-card-inner" :class="{ 'flipped': flippedCards.includes(serie.id) }">
        <div class="flip-card-front">
          <img class="mt-2" :src="'https://image.tmdb.org/t/p/w342' + serie.backdrop_path" alt="logo-serie">
          <h6 class="card-subtitle mb-2 mt-2 text-muted text-white"> Title: {{ serie.name }}</h6>
        </div>
        <div class="flip-card-back">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 mt-2 text-muted">Categories: SerieTv</h6>
            <h6 class="card-subtitle mb-2 mt-2 text-muted"> Title: {{ serie.name }}</h6>
            <p class="card-text" :class="{ 'scrollable': flippedCards.includes(serie.id) }">
              <span>Language:</span>
              <img class="img-flag" :src="getFlagPath(serie.original_language)" :alt="logo">
            </p>
            <div class="star-rating">
              <i v-for="star in getStarArray(serie.vote_average)" :key="star" class="fa-solid fa-star" style="color: #c0cd0e;"></i>
            </div>
            <p class="mt-1">Release Date: {{ serie.release_date }}</p>
            <div class="overview-scroll">
              <p class="card-text">{{ serie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      flags: ['en', 'es', 'fr', 'it', 'de', 'ca', 'gb', 'jp', 'kr'],
      flippedCards: [],
    };
  },
  props: {
    movies: Array,
    series: Array,
  },
  methods: {
    flipCard(itemId, value) {
      if (value) {
        this.flippedCards = [itemId];
      } else {
        this.flippedCards = this.flippedCards.filter(id => id !== itemId);
      }
    },
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

// CardApp.vue
<style lang="scss" scoped>
  .card {
    min-width: 350px;
    min-height: 400px;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    position: relative;
    margin-right: 10px;
    background-color: #202020;  // Colore di sfondo scuro
    color: white;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-img-top {
      border-radius: 8px 8px 0 0;
    }

    .card-body {
      padding: 15px;
    }

    .card-text {
      font-size: 0.9rem;
      color: white;
      overflow: hidden;
      max-height: 150px;
    }

    .star-rating {
      margin-top: 10px;

      i {
        margin-right: 3px;
      }
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.5s ease-in-out;
    }

    .flip-card-front,
    .flip-card-back {
      overflow-x: hidden;
      backface-visibility: hidden;
      position: absolute;
      background-color: #202020;  // Colore di sfondo scuro
      color: white;
    }

    .flip-card-back {
      transform: rotateY(180deg);
    }

    .flipped .flip-card-inner {
      transform: rotateY(180deg);
    }

    &:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .overview-scroll {
      max-height: 300px;
      overflow-y: auto;
    }

    .card-text.scrollable {
      overflow: auto;
    }
  .img-flag{
    width: 30px;
  }
  }
</style>

