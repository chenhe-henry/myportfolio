<template>
  <div>
    <img
      src="https://chenhe-henry.github.io/myportfolio/ChenHe.jpg"
      class="homepage__avatar"
      alt="Chen He"
    />
    <h1>About Me</h1>
    <p>
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
      HTML/CSS/JavaScript
      jQuery | Sass | Bootstrap
      Ruby on Rails | SQL/Postgres
      React.js | Express | Node | MongoDB
      GitHub | Heroku
      Amazon Web Services
    </h3>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default { components: { Footer } };
</script>

<style lang="scss" scoped>
.homepage__avatar {
  height: 200px;
  clip-path: circle();
}
</style>
    
