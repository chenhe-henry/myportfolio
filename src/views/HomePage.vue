<template>
  <div class="homepage">
    <div class="homepage__logo-box">
      <img :src="getLogosUrl('logo.png')" alt="Logo" class="homepage__logo" />
    </div>
    <div class="homepage__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Chen He</span>
        <span class="heading-primary--sub">A Front-end Developer</span>
      </h1>
      <router-link to="/about" class="btn btn-white btn-animated">
        <strong>More about me</strong>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    getLogosUrl(pic) {
      return require(`../assets/${pic}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.homepage {
  height: 100vh;
  background-color: rgba(black, 0.8);
  background-size: cover;
  background-position: top;
  position: relative;
  &__text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    text-align: center;
  }
  &__logo-box {
    position: absolute;
    top: 0;
    left: 4rem;
    transition: all 0.2s;
  }
  &__logo {
    height: 15rem;
    animation: enterFromRight ease-out 3s 1;
    animation-fill-mode: backwards;
  }
}
@media (min-width: 768px) {
}
.btn {
  text-decoration: none;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.4s;
  padding: 2rem 4rem;
  position: relative;
  font-size: 1rem;
  &:link,
  &:visited {
    text-transform: uppercase;
  }
  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(black, 0.2);
    &::after {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  &-white {
    background-color: white;
    color: grey;
    &::after {
      background-color: white;
    }
  }
  &-animated {
    animation: moveInBottom 3s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}
.heading-primary {
  text-transform: uppercase;
  margin-bottom: 6rem;
  backface-visibility: hidden;
  transition: all 0.2s;
  &--main {
    display: block;
    font-size: 4rem;
    margin-bottom: 6rem;
    animation: comingInRight 3s ease-out 3s;
    letter-spacing: 3rem;
    color: white;
    animation-fill-mode: backwards;
  }
  &--sub {
    display: block;
    font-size: 1.5rem;
    animation: comingInLeft 3s ease-out 0.75s;
    letter-spacing: 1rem;
    color: white;
    animation-fill-mode: backwards;
  }
}
@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes comingInRight {
  0% {
    opacity: 0;
    transform: translateY(-15rem);
  }
  30% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10rem) translateX(2rem);
  }
  45% {
    transform: translateY(0) translateX(4rem);
  }
  60% {
    transform: translateY(-5rem) translateX(6rem);
  }
  80% {
    transform: translateY(0) translateX(8rem);
  }
  100% {
    opacity: 1;
    transform: translateX();
  }
}
@keyframes comingInLeft {
  0% {
    opacity: 0;
    transform: translateY(-15rem);
  }
  30% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10rem) translateX(-2rem);
  }
  45% {
    transform: translateY(0) translateX(-4rem);
  }
  60% {
    transform: translateY(-5rem) translateX(-6rem);
  }
  80% {
    transform: translateY(0) translateX(-8rem);
  }
  100% {
    opacity: 1;
    transform: translateX();
  }
}
@keyframes enterFromRight {
  0% {
    opacity: 0;
    transform: translateX(150rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
