import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Project from "@/views/Project.vue";
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "homepage", component: HomePage },
    { path: "/about", name: "about", component: About },
    { path: "/projects", name: "projects", component: Projects },
    {
      path: "/projects/:id",
      name: "project",
      component: Project,
      props: true,
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/components/Footer.vue"),
    },
    { path: "*", redirect: "/" },
  ],
});
