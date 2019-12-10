<template>
  <div class="product-list">
    <div class="py-4">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="card border-0">
              <div class="card-body px-0">
                <h3>{{ title }}</h3>
                <p class="text-muted">{{ subtitle }}</p>
                <router-link to=".">VIEW ALL</router-link>
              </div>
            </div>
          </div>
          <div class="col-2" v-for="movie in movies" :key="movie.id">
            <div class="card border-0">
              <img
                :src="movie.thumb"
                class="card-img-top"
                :alt="movie.name"
              />
              <div class="card-body px-0">
                <small class="card-text"
                  >{{ movie.year }}, {{ movie.categories }}</small
                >
                <h5 class="card-title text-truncate">{{ movie.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    title: String,
    subtitle: String,
    movies: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
