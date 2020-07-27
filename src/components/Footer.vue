<template>
  <div class="footer">
    <a class="footer__link" href="https://github.com/chenhe-henry" title="github" target="_blank">
      <font-awesome-icon :icon="['fab', 'github-square']" class="footer__link-icon" />
    </a>
    <a
      class="footer__link"
      href="https://www.linkedin.com/in/chenhe-henry/"
      title="linkedin"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" class="footer__link-icon" />
    </a>
    <a class="footer__link" href="mailto: chenhe.elec@gmail.com" title="email" target="_blank">
      <font-awesome-icon :icon="['fas', 'envelope-open-text']" class="footer__link-icon" />
    </a>
    <a
      class="footer__link"
      download="ChenHe-Resume.pdf"
      href="https://chenhe-henry.github.io/myportfolio/ChenHe-Resume.pdf"
      title="resume"
      target="_blank"
    >
      <font-awesome-icon :icon="['fas', 'file-download']" class="footer__link-icon" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: black;
  align-items: center;
  height: 15vh;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  &__link {
    font-size: 3rem;
    margin: auto;
    color: white;
    text-decoration: none;
  }
}
</style>
