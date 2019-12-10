<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand d-none" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link class="nav-item nav-link active" to="/about"
            >Home</router-link
          >
          <router-link class="nav-item nav-link" to="/about"
            >Movies</router-link
          >
          <router-link class="nav-item nav-link" to="/about"
            >TV Shows</router-link
          >
          <router-link class="nav-item nav-link" to="/about">Blog</router-link>
        </div>
        <form class="form-inline my-2 my-lg-0">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search..." />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </form>
        <button class="btn btn-outline-secondary ml-2">Upload</button>
        <div class="dropdown ml-2">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
