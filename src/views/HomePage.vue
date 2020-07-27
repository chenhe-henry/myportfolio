<template>
  <div class="homepage">
    <h1 class="homepage__name">Chen He</h1>
    <h3 class="homepage__title">A front - end developer</h3>
    <img
      src="https://chenhe-henry.github.io/myportfolio/ChenHe.jpg"
      class="homepage__avatar"
      alt="Chen He"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  text-transform: uppercase;
  &__name {
    color: red;
  }
  &__avatar {
    height: 200px;
    clip-path: circle();
  }
}
</style>
