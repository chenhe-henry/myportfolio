<template>
  <div>
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <div class="project__shape">
          <img :src="getLogosUrl(project.img)" :alt="project.name" class="project__img" />
        </div>
        <div class="project__tech">
          <p class="project__title">{{project.name}}</p>
          <p>{{ project.techStack }}</p>
          <p>{{ project.description }}</p>
          <a :href="project.demoLink" target="_blank" class="project__link">Live Demo</a> |
          <a :href="project.codeLink" target="_blank" class="project__link">Code Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          id: "1",
          name: "To do list",
          img: "todolist.jpg",
          description: `This is the first project I created in GA. Built with HTML, CSS
              and jQuery, this simple "To do list" allows you to add, edit,
              delete, highlight, check and search “todos”.`,
          techStack: "HTML, CSS, Bootstrap, jQuery",
          demoLink: "https://chenhe-henry.github.io/gaseifx01-project0/",
          codeLink: "https://github.com/chenhe-henry/gaseifx01-project0",
        },
        {
          id: "2",
          name: "Health tracking",
          img: "healthtracking.jpg",
          description: ` This is the first full-stack project I have done. A health
              tracking system which allows you to login and helps you to record
              your health data.`,
          techStack: "HTML,CSS,Vue.js,gh-pages, local storage",
          demoLink: "https://chenhe-henry.github.io/health-tracking",
          codeLink: "https://github.com/chenhe-henry/health-tracking",
        },
        {
          id: "3",
          name: "Find Home",
          img: "findhome.jpg",
          description: ` The final project in GA. Created with React, Node, Express,
              MongoDB and Mongoose. A web app allows you to login with Google
              account, search and get details of properties for rental.`,
          techStack:
            "React.js,Express,Node.js,MongoDB,Google OAuth,Domain API,Google Map API",
          demoLink: "https://findhome101.herokuapp.com/",
          codeLink: "https://github.com/chenhe-henry/gaseifx01-project3",
        },
        {
          id: "4",
          name: "My Portfolio",
          img: "myportfolio.jpg",
          description: ` This is the first full-stack project I have done. A health
              tracking system which allows you to login and helps you to record
              your health data.`,
          techStack: "Vue.js, HTML/CSS/SCSS, netlify",
          demoLink: "https://chenhe-henry.github.io/myportfolio",
          codeLink: "https://github.com/chenhe-henry/myportfolio",
        },
      ],
    };
  },
  methods: {
    getLogosUrl(pic) {
      return require(`../assets/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 15vw;
  display: grid;
}
.project {
  display: flex;
  border: 1px solid grey;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  margin: 30px auto;
  padding: 20px;
  width: 100%;
  transition: all 0.2s;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  &:active {
    transform: translateY(0);
  }
  &__title {
    background-image: linear-gradient(to right, #fff700, #00c3ff);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3rem;
    font-weight: 700;
  }
  &__img {
    margin: -4vh 4vw 0 4vw;
    height: 20vh;
    width: 15vw;
    border-radius: 5px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    transition: all 0.4s;
    backface-visibility: hidden;
    &:hover {
      transform: scale(0.9);
      filter: blur(3px) brightness(70%);
    }
  }
  &__tech {
    font-weight: 500;
    margin: 20px;
    text-align: left;
    width: 40vw;
  }
  &__link {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

  &__shape {
    transform: translateX(-3rem);
    position: relative;
  }
}
</style>
