<template>
        <div class="px-3">
             <a href="#"></a><h1>BOOLFLIX</h1>
        </div>
      <div class="d-flex px-3 " v-if="showSearch">
        <input type="text" class="form-control" placeholder="Cerca film..." v-model="searchQuery" @keyup.enter="emitSearch"/>
        <button class="btn btn-outline-secondary" type="button" @click="emitSearch">cerca</button>
      </div>

  </template>
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        showSearch: true,
      };
    },
    methods: {
      emitSearch() {
        this.$emit("searchMovie", this.searchQuery);
      },
    },
  };
  </script>
  <style lang="scss" scoped>
    h1 {
      color: red;
    }
  </style>
  