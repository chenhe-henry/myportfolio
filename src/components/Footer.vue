<template>
  <div class="footer">
    <a
      class="footer__link"
      :href="media.name === 'email' ? `mailto:${media.link}` : media.link"
      v-for="media in medias"
      :key="media.name"
      role="media"
      :title="media.name"
      target="_blank"
      :download="media.name === 'resume' ? media.link : false"
    >
      <font-awesome-icon :icon="media.icon" class="footer__link-icon" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medias: [
        {
          name: "github",
          link: "https://github.com/chenhe-henry",
          icon: ["fab", "github-square"],
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/chenhe-henry/",
          icon: ["fab", "linkedin-in"],
        },
        {
          name: "email",
          link: "chenhe.elec@gmail.com",
          icon: ["fas", "envelope-open-text"],
        },
        {
          name: "resume",
          link: "/ChenHe-Resume.pdf",
          icon: ["fas", "file-download"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: grey;
  align-items: center;
  height: 20vh;
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
