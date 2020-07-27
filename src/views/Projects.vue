<template>
  <div>
    <div class="projects">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="{
                name: 'project',
                params: {
                  projectName: `${project.name}`,
                  description: `${project.description}`,
                  id: `${project.id}`,
                  img: `${project.img}`
                },
              }"
        class="project"
      >
        <img :src="project.img" :alt="project.name" class="project__img" />
        <p class="project__tech">{{project.techStack}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: "1",
          name: "To do list",
          img: "https://chenhe-henry.github.io/myportfolio/todolist.jpg",
          description: `This is the first project I created in GA. Built with HTML, CSS
              and jQuery, this simple "To do list" allows you to add, edit,
              delete, highlight, check and search “todos”.`,
          techStack: "HTML, CSS, Bootstrap and jQuery.",
          demoLink: "https://chenhe-henry.github.io/gaseifx01-project0/",
          codeLink: "https://github.com/chenhe-henry/gaseifx01-project0",
        },
        {
          id: "2",
          name: "Health tracking",
          img: "https://chenhe-henry.github.io/myportfolio/healthtracking.jpg",
          description: ` This is the first full-stack project I have done. A health
              tracking system which allows you to login and helps you to record
              your health data.`,
          techStack:
            "HTML, CSS, Ruby on Rails, Bootstrap, and PostgreSQL database.",
          demoLink: "https://healthtracking01.herokuapp.com/",
          codeLink: "https://github.com/chenhe-henry/gaseifx01-project1",
        },
        {
          id: "3",
          name: "Find Home",
          img: "https://chenhe-henry.github.io/myportfolio/findhome.jpg",
          description: ` The final project in GA. Created with React, Node, Express,
              MongoDB and Mongoose. A web app allows you to login with Google
              account, search and get details of properties for rental.`,
          techStack:
            "React.js, Express, Node.js, MongoDB, Mongoose, Google OAuth,Domain API, and Google Map API.",
          demoLink: "https://findhome101.herokuapp.com/",
          codeLink: "https://github.com/chenhe-henry/gaseifx01-project3",
        },
        {
          id: "4",
          name: "My Portfolio",
          img: "https://chenhe-henry.github.io/myportfolio/myportfolio.jpg",
          description: ` This is the first full-stack project I have done. A health
              tracking system which allows you to login and helps you to record
              your health data.`,
          techStack:
            "HTML, CSS, Ruby on Rails, Bootstrap, and PostgreSQL database.",
          demoLink: "https://chenhe-henry.github.io/myportfolio",
          codeLink: "https://github.com/chenhe-henry/myportfolio",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.project {
  border: 1px solid black;
  color: black;
  text-decoration: none;
  margin: 20px auto;
  padding: 20px;
  width: 25vw;
  transition: all 0.2s;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 10px 10px 10px 10px rgba(black, 0.2);
  }
  &__img {
    margin: 0 atuo;
    height: 20vh;
    width: 15vw;
  }
  &__tech {
    font-weight: 500;
    margin: 20px;
  }
}
</style>