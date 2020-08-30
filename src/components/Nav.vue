<template>
  <div id="nav">
    <router-link to="/" class="nav__link">Home</router-link>
    <router-link to="/about" class="nav__link">About</router-link>
    <router-link to="/projects" class="nav__link">Projects</router-link>
    <router-link to="/contact" class="nav__link">Contact</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  font-size: 2rem;
  background-color: grey;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
