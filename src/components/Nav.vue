<template>
  <div id="nav">
    <router-link to="/" class="nav__link">Home</router-link>
    <router-link to="/about" class="nav__link">About</router-link>
    <router-link to="/projects" class="nav__link">Projects</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 10px;
  font-size: 1rem;
  background-color: grey;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    padding: 20px;
    grid-template-rows: none;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1440px) {
    padding: 30px;
  }
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
