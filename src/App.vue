<template>
  <div id="app">
    <div class="navbar">
      <router-link class="navbar__link" :to="{ name: 'homepage' }">Home</router-link>
      <router-link class="navbar__link" :to="{ name: 'about' }">About</router-link>
      <router-link class="navbar__link" :to="{ name: 'projects' }">Projects</router-link>
    </div>
    <router-view class="maincontent"></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Footer },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  font-size: 2rem;
  font-weight: 700;
  background-color: grey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 15vh;

  &__link {
    color: black;
    text-decoration: none;
    // border: 1px solid black;
    margin: auto;
    &:hover {
      color: white;
    }
  }
}
.maincontent {
  height: 66vh;
}
</style>
