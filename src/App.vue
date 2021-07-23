<template>
  <div id="app">
    <IconBar />
    <div class="card-started">
      <div class="block-photo"><img class="image" alt="Iam" src="/img/1.jpg"></div>
      <div  class="name">{{name}}</div>
      <div class="speciality">{{speciality}}</div>

    <div class="social">
        <span>
          <a class="contact-icon" href="tel:+79874991540">
            <img class="icon" src="/icon/phone_icon.png">
          </a>
        </span>
      <span>
          <a class="contact-icon" href="https://wa.me/79874991540">
            <img class="icon" src="/icon/whatsapp_icon.png">
          </a>
        </span>
      <span>
          <a class="contact-icon" href="https://gmail.com">
            <img class="icon" src="/icon/mail_icon.png">
          </a>
        </span>

    </div>
      <div class="links-position">
      <div class="links">
        <div class="link">скачать резюме</div>
        <div class="link">контакты</div>
      </div>
      </div>
    </div>
    <aboutMe v-show="active" :class="animated = isVisible" @click="showBlock"/>
    <ExperienceEducation class="active"/>
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import IconBar from './components/IconBar.vue'
import ExperienceEducation from './components/ExperienceEducation.vue'

export default {
  name: 'App',
  components: {
    AboutMe,
    IconBar,
    ExperienceEducation
  },
  data: () => ({
    name: 'альбина кашапова',
    speciality: 'frontend developer',
    isVisible: false,
  }),
  methods: {
    showBlock() {
      this.isVisible = true;
    }
  }
}
</script>

<style lang="scss">
$green: #299a60;

.animated {
  animation-duration: 2s;
  animation-name: fadeInLeft
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-70%, 0, 0)
  }
  100% {
    opacity: 1;
    transform: none
  }
}

.active {
  opacity: 1;
  visibility: visible;
}
body, html {
  height: 100%;
  background-color: $green;
}
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
  font-size: 16px;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: $green;

  .card-started {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    position: relative;
    height: 80%;
    width: 500px;
    border-radius: 4px;
    box-shadow: -15px -15px 2px rgb(255 255 255 / 10%);
    z-index: 10;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 10px 10px 15px rgb(0 0 0 / 5%);
    }
  }

  .block-photo {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .image {
    width: 100%;
  }

  .name {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .speciality {
    color: $green;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  .social {
    align-items: center;
    color: black;
    margin-bottom: 4rem;
  }

  .contact-icon {
    cursor: pointer;
    color: black;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      color: $green;
    }
  }

  .icon {
    width: 25px;
  }
  .links-position {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .links {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-flow: row wrap;
    text-transform: uppercase;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      align-items: center;
      left: 50%;
      width: 1px;
      height: 100%;
      background: linear-gradient(dimgray, white);
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to left, white, dimgray, white);
    }
  }

  .link {
    cursor: pointer;
    color: black;
    width: 50%;

    &:hover {
      color: $green;
    }
  }
}
</style>
