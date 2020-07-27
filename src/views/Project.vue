<template>
  <div class="project">
    <h1>Project: {{projectName}}</h1>
    <h3 class="project__description">{{description}}</h3>
    <img :src="img" :alt="projectName" class="img" />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },
  props: ["projectName", "description", "img"],
};
</script>

<style lang="scss" scoped>
.img {
  height: 50vh;
}
</style>

