<template>
  <div class="homepage">
    <header class="header" id="header">
      <div class="header__logo-box">
        <a href="#header">
          <img src="../assets/logo_transparent 2.png" alt="Logo" class="header__logo" />
        </a>
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Chen He</span>
          <span class="heading-primary--sub">A Front-end Developer</span>
        </h1>
        <router-link to="/about" class="btn btn-white btn-animated">
          <strong>
            More about me
            <i class="fas fa-arrow-down"></i>
          </strong>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.homepage {
  &__name {
    text-transform: uppercase;
    color: red;
    font-size: 2em;
  }
  &__title {
    text-transform: uppercase;
    font-size: 2em;
  }
}
.header {
  height: 100vh;
  background-image: linear-gradient(rgba(black, 0.8), rgba(black, 0.8)),
    url("https://loveisfrontend.com/wp-content/uploads/2020/02/code-coding-computer-data-574073-720x480.jpg");
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
    top: 10rem;
    left: 4rem;
    transition: all 0.2s;
  }
  &__logo {
    height: 15rem;
    animation: enterFromRight ease-out 3s 1;
    animation-fill-mode: backwards;
  }
}
.back {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  text-decoration: none;
  font-size: 5rem;
  color: grey;
  z-index: 1000;
  &:hover {
    color: blue;
  }
  &:active {
    opacity: 0;
  }
}
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: grey;
  @media (min-width: 768px) {
  }
  z-index: 2000;
  &--links {
    list-style: none;
    color: white;
    display: flex;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
    flex-wrap: nowrap;

    &-link,
    &:link {
      flex-grow: 1;
      padding: 2rem;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        white 50%
      );
      background-size: 240%;
      transition: all 0.4s;
      &:hover,
      &:active {
        background-position: 100%;
        color: blue;
      }
    }
  }
}
@keyframes jumpAround {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem) rotate(0deg);
  }
  60% {
    transform: rotate(180deg);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  60% {
    transform: rotate(-180deg);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
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
    /* transition  is always in the initial state */
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
    /* backwards means the initial state only happens when the animation starts */
    animation-fill-mode: backwards;
  }
}

.btn-text {
  &:link,
  &:visited {
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    color: blue;
    border-bottom: 1px solid blue;
    transition: all 0.2s;
  }
  &:hover {
    background-color: blue;
    color: white;
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 2rem rgba(black, 0.2);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
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
</style>
