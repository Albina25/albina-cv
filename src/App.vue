<template>
  <div id="app">

    <div class="card-started">
      <div class="block-photo"><img class="image" alt="Iam" src="/img/iam.jpg"></div>
      <div  class="name">{{name}}</div>
      <div class="speciality">{{speciality}}</div>

    <div class="social">
        <span>
          <a class="contact-icon" href="tel:+79874991540">
            <i class="fas fa-circle-o fa-phone"></i>
          </a>
        </span>
      <span>
          <a class="contact-icon" href="https://wa.me/79874991540">
            <i class="fab fa-whatsapp"></i>
          </a>
        </span>
      <span>
          <a class="contact-icon" href="https://gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </span>

    </div>
      <div class="links">
        <div class="link">скачать резюме</div>
        <div class="link">контакты</div>
      </div>
    <aboutMe />

    </div>
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    AboutMe,
  },
  data: () => ({
    name: 'альбина кашапова',
    speciality: 'frontend developer',
  })
}
</script>

<style lang="scss">
$green: #299a60;

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
    box-shadow: 10px 10px 15px rgb(0 0 0 / 5%);
    box-shadow: -15px -15px 2px rgb(255 255 255 / 10%);
    //overflow: hidden;
    z-index: 10;
  }

  .block-photo {
    width: 100%;
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
    font-size: 1rem;
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

  .links {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-flow: row wrap;
    text-transform: uppercase;
    //border-top: 1px solid gray;
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
      //width: 100%;
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
