<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/wireframe">Wireframe</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 content-panel">
        <!-- Your content goes here -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.content-panel {
  min-height: 800px;
}
.nav-item {
  margin: 0px 12px;
}
</style>
