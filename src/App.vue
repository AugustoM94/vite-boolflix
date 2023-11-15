<template>
    <header class="d-flex justify-content-between align-items-center bg-black ">
        <HeaderApp/>
    </header>
</template>

<script>
import { store } from './assets/data/store';
import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';
  export default {
    name: 'App',
  components: {
    HeaderApp
  },
  data() {
    return {
      store,

    };
  },
  }
</script>

<style lang="scss" scoped>

</style>