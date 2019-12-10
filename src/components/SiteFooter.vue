<template>
  <div class="site-footer">
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex justify-content-end">
          <nav class="nav">
            <router-link to="." class="nav-item nav-link">Facebook</router-link>
            <router-link to="." class="nav-item nav-link">Twitter</router-link>
            <router-link to="." class="nav-item nav-link">Google+</router-link>
            <router-link to="." class="nav-item nav-link">Vimeo</router-link>
            <router-link to="." class="nav-item nav-link">RSS</router-link>
          </nav>
        </div>

        <hr />

        <div class="row">
          <div class="col-6">
            <h5>Movie Categories</h5>

            <div class="row">
              <div class="col-6">
                <ul class="nav flex-column">
                  <router-link to="." class="nav-item nav-link">Action</router-link>
                  <router-link to="." class="nav-item nav-link">Adventure</router-link>
                  <router-link to="." class="nav-item nav-link">Animation</router-link>
                  <router-link to="." class="nav-item nav-link">Comedy</router-link>
                  <router-link to="." class="nav-item nav-link">Crime</router-link>
                </ul>
              </div>
              <div class="col-6">
                <ul class="nav flex-column">
                  <router-link to="." class="nav-item nav-link">Drama</router-link>
                  <router-link to="." class="nav-item nav-link">Fantacy</router-link>
                  <router-link to="." class="nav-item nav-link">Horror</router-link>
                  <router-link to="." class="nav-item nav-link">Mystrey</router-link>
                  <router-link to="." class="nav-item nav-link">Romance</router-link>
                </ul>
              </div>
              <div class="col-6"></div>
            </div>
          </div>
          <div class="col-6">
            <h5>TV Series</h5>

            <div class="row">
              <div class="col-6">
                <ul class="nav flex-column">
                  <router-link to="." class="nav-item nav-link">Valentine Day</router-link>
                  <router-link to="." class="nav-item nav-link">Underrated Comedies</router-link>
                  <router-link to="." class="nav-item nav-link">Scary TV Series</router-link>
                  <router-link to="." class="nav-item nav-link">Best 2018 Documentaries</router-link>
                  <router-link to="." class="nav-item nav-link">Classic Shows</router-link>
                </ul>
              </div>
              <div class="col-6">
                <ul class="nav flex-column">
                  <router-link to="." class="nav-item nav-link">Big TV Premieres</router-link>
                  <router-link to="." class="nav-item nav-link">Reality TV Shows</router-link>
                  <router-link to="." class="nav-item nav-link">Original Shows</router-link>
                  <router-link to="." class="nav-item nav-link">Suprise of the Year Shows</router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-4">
      <div class="container">
        <div class="d-flex justify-content-between">
          <p class="text-muted mb-0">Copyright © 2019, Vodi. All Rights Reserved</p>
          <p class="mb-0">
            <router-link to="/about" class="text-muted">Privacy Policy</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-link {
    color: #666;
    padding-left: 0;
  }
</style>
