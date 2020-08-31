<template>
  <div class="about">
    <Nav />
    <img :src="getLogosUrl('ChenHe.jpg')" class="homepage__avatar" alt="Chen He" />
    <h1>About Me</h1>
    <p class="about__brief">
      I'm a front-end developer with a background in electrical and electronic
      engineering. With over two years' experience as a technical executive, I
      have killer attention to detail, which means I see issues arising more
      quickly than others. With the proven ability as a critical thinker, I'm
      able to devise effective and efficient workflows. To become more creative
      and to explore my ability to turn people's wonderful ideas into reality, I
      decided to move into software engineering, the industry with a lifetime of
      exciting challenges.
    </p>
    <h1>Skills</h1>
    <h3 class="about__tech">
      <div class="about__tech-col">
        <div class="about__tech-col-tech">Responsive Design</div>
        <div class="about__tech-col-tech">HTML/CSS/Sass</div>
        <div class="about__tech-col-tech">BEM method</div>
        <div class="about__tech-col-tech">Bootstrap</div>
      </div>
      <div class="about__tech-col">
        <div class="about__tech-col-tech">JavaScript/jQuery</div>
        <div class="about__tech-col-tech">React.js/Vue.js</div>
        <div class="about__tech-col-tech">Ruby on Rails</div>
        <div class="about__tech-col-tech">MySQL</div>
      </div>
      <div class="about__tech-col">
        <div class="about__tech-col-tech">Heroku/Netlify</div>
        <div class="about__tech-col-tech">Express</div>
        <div class="about__tech-col-tech">GitHub</div>
        <div class="about__tech-col-tech">Node</div>
      </div>
    </h3>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Nav, Footer },
  methods: {
    getLogosUrl(pic) {
      return require(`../assets/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;

  &__brief {
    margin: 0 5vw 5vh 5vw;
    text-align: justify;
    font-size: 1.5rem;
    font-weight: 500;
    &::first-letter {
      font-size: 3rem;
      color: brown;
    }
  }
  &__tech {
    font-size: 1.5rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    margin-bottom: 5vh;
    &-col {
      margin: 2vh;
      &-tech {
        padding: 0.5rem;
      }
    }
    @media (min-width: 1024px) {
      grid-template-rows: none;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
.homepage__avatar {
  margin: 5vh 0 2vh 0;
  height: 200px;
  clip-path: circle();
}
</style>
    
