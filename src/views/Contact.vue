<template>
  <div>
    <Nav />
    <div class="contact__links">
      <a
        class="contact__link"
        href="https://github.com/chenhe-henry"
        title="github"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github-square']" class="contact__link-icon" />
        <p class="contact__link-title">Github</p>
      </a>
      <a
        class="contact__link"
        href="https://www.linkedin.com/in/chenhe-henry/"
        title="linkedin"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="contact__link-icon" />
        <p class="contact__link-title">LinkedIn</p>
      </a>
      <a class="contact__link" href="mailto: chenhe.elec@gmail.com" title="email" target="_blank">
        <font-awesome-icon :icon="['fas', 'envelope-open-text']" class="contact__link-icon" />
        <p class="contact__link-title">Email</p>
      </a>
      <a
        class="contact__link"
        download="ChenHe-Resume.pdf"
        href="https://chenhe-henry.github.io/myportfolio/ChenHe-Resume.pdf"
        title="resume"
        target="_blank"
      >
        <font-awesome-icon :icon="['fas', 'file-download']" class="contact__link-icon" />
        <p class="contact__link-title">Resume</p>
      </a>
      <a
        href
        onclick="Calendly.initPopupWidget({url: 'https://calendly.com/chenhe'});return false;"
      >Schedule time with me</a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Nav, Footer },
};
</script>

<style lang="scss" scoped>
.contact__links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  &__link,
  a {
    font-size: 2.5rem;
    height: 20vh;
    margin: 2vh auto;
    color: black;
    text-decoration: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
}
</style>