<template>
  <div class="footer">
    <div class="footer__links">
      <a class="footer__link" href="https://github.com/chenhe-henry" title="github" target="_blank">
        <font-awesome-icon :icon="['fab', 'github-square']" class="footer__link-icon" />
        <div class="footer__link-title">Github</div>
      </a>
      <a
        class="footer__link"
        href="https://www.linkedin.com/in/chenhe-henry/"
        title="linkedin"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="footer__link-icon" />
        <div class="footer__link-title">LinkedIn</div>
      </a>
      <a class="footer__link" href="mailto: chenhe.elec@gmail.com" title="email" target="_blank">
        <font-awesome-icon :icon="['fas', 'envelope-open-text']" class="footer__link-icon" />
        <div class="footer__link-title">Email</div>
      </a>
      <a
        class="footer__link"
        download="ChenHe-Resume.pdf"
        href="https://chenhe-henry.github.io/myportfolio/ChenHe-Resume.pdf"
        title="resume"
        target="_blank"
      >
        <font-awesome-icon :icon="['fas', 'file-download']" class="footer__link-icon" />
        <div class="footer__link-title">Download Resume</div>
      </a>
      <a
        class="footer__link"
        href
        onclick="Calendly.initPopupWidget({url: 'https://calendly.com/chenhe'});return false;"
      >
        <font-awesome-icon :icon="['fas', 'calendar-alt']" class="footer__link-icon" />
        <div class="footer__link-title">Schedule time with me</div>
      </a>
    </div>
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
  background-color: grey;
  font-weight: bold;
  &__links {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    width: 100%;
    padding: 20px 0;
    @media (min-width: 1024px) {
      grid-template-rows: none;
      grid-template-columns: repeat(4, 1fr) 2fr;
    }
  }
  &__link,
  a {
    margin: auto;
    color: black;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      color: white;
    }
  }
  &__link {
    display: flex;
    padding: 1vh 0;
    @media (min-width: 1024px) {
      display: unset;
      padding: 0;
    }
    &-icon {
      font-size: 2rem;
    }
    &-title {
      margin: 0 2vw;
      font-size: 1.5rem;
      @media (min-width: 1024px) {
        font-size: 1.2rem;
        margin: 0;
      }
      @media (min-width: 1440px) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
