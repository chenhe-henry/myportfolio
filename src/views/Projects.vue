<template>
  <div>
    <Nav />
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="projects__project">
        <div class="projects__project__shape">
          <a :href="project.demoLink" target="_blank">
            <img
              :src="getLogosUrl(project.img)"
              :alt="project.name"
              class="projects__project__shape-img"
            />
          </a>
        </div>
        <div class="projects__project__brief">
          <p class="projects__project__brief-title">{{project.name}}</p>
          <p class="projects__project__brief-tech">{{ project.techStack }}</p>
          <p class="projects__project__brief-description">{{ project.description }}</p>
          <a
            :href="project.demoLink"
            target="_blank"
            class="projects__project__brief-link"
          >Live Demo</a> |
          <a
            :href="project.codeLink"
            target="_blank"
            class="projects__project__brief-link"
          >Code Link</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Nav, Footer },
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
          description: ` This is a health
              tracking system which allows you to record
              your health data, and calculate your BMI (body mass index) to have an overview of your health condition.`,
          techStack: "HTML, CSS, Vue.js, gh-pages, local storage",
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
            "React.js, Express, Node.js, MongoDB, Google OAuth, Domain API, Google Map API",
          demoLink: "https://findhome101.herokuapp.com/",
          codeLink: "https://github.com/chenhe-henry/gaseifx01-project3",
        },
        {
          id: "4",
          name: "My Portfolio",
          img: "myportfolio.jpg",
          description: `A simple multi-page portfolio, keep learning and growing. Continuously refactor with new tech.`,
          techStack: "Vue.js, HTML/CSS/SCSS, gh-pages, responsive design",
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
  margin: 0;
  display: grid;
  @media (min-width: 768px) {
    margin: 0 5vw;
  }
  @media (min-width: 1024px) {
    margin: 0 10vw;
  }
  @media (min-width: 1440px) {
    margin: 0 15vw;
  }
  &__project {
    border: 1px solid grey;
    border-radius: 10px;
    color: black;
    text-decoration: none;
    margin: 5vh auto;
    width: 100%;
    transition: all 0.2s;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    @media (min-width: 768px) {
      width: 90%;
    }
    @media (min-width: 1024px) {
      display: flex;
      padding: 20px;
    }
    &:active {
      transform: translateY(0);
    }
    &__shape {
      position: relative;
      @media (min-width: 1024px) {
        transform: translateX(-3rem);
      }
      &-img {
        margin: 2vh;
        height: 35vh;
        width: 90%;
        border-radius: 5px;
        box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
          0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
        transition: all 0.4s;
        backface-visibility: hidden;
        @media (min-width: 768px) {
          height: 45vh;
        }
        @media (min-width: 1024px) {
          height: 25vh;
          width: 25vw;
          margin: -4vh 4vw 0 4vw;
        }
        @media (min-width: 1024px) {
          width: 20vw;
        }
        &:hover {
          // transform: scale(0.9);
          // filter: blur(3px) brightness(70%);
          transform: translateY(-2vh);
        }
      }
    }
    &__brief {
      font-weight: 500;
      margin: 20px;
      text-align: center;
      width: 80vw;
      font-size: 1.5rem;
      @media (min-width: 768px) {
        width: 93%;
      }
      &-title {
        margin: 0;
        background-image: linear-gradient(to right, #fff700, #00c3ff);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 2.5rem;
        font-weight: 700;
        @media (min-width: 1440px) {
          font-size: 3rem;
        }
      }
      &-tech {
        font-weight: bold;
      }
      &-description {
        text-align: justify;
      }
      &-link {
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}
</style>
