<template>
  <div class="project">
    <h1>Project: {{projectName}}</h1>
    <h3 class="project__description">{{description}}</h3>
    <img :src="img" :alt="projectName" class="img" />
  </div>
</template>

<script>
export default {
  props: ["projectName", "description", "img"],
};
</script>

<style lang="scss" scoped>
.img {
  height: 50vh;
}
</style>