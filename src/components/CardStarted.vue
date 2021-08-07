<template>
  <div class="main-card">
    <div class="card-started">
      <div class="block-photo">
        <img class="image" alt="Iam" src="img/table1.jpg">
      </div>
      <div  class="name">альбина кашапова</div>
      <div class="speciality">frontend developer</div>
      <div class="social">
              <span>
                <a class="contact-icon" href="tel:+79874991540">
                  <icon-phone class="icon"></icon-phone>
                </a>
              </span>
        <span>
                <a class="contact-icon" href="https://wa.me/79874991540">
                  <icon-whats-app class="icon"></icon-whats-app>
                </a>
              </span>
        <span>
                <a class="contact-icon" href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJNwgHNmJkZCJdSRTzHvczBHFKQbMXVdRGPJzrzhMQjRmNsnCBNRQQmWMwJfzZtKdBwdRwg">
                  <icon-envelope class="icon"></icon-envelope>
                </a>
              </span>
      </div>
        <div class="links">
          <div class="link">скачать резюме</div>
<!--          <div class="link">контакты</div>-->
        </div>
    </div>
  </div>
</template>

<script>
import IconPhone from './icons/IconPhone.vue'
import IconWhatsApp from './icons/IconWhatsApp.vue'
import IconEnvelope from './icons/IconEnvelope.vue'

export default {
  name: 'CardStarted',
  components: {
    IconPhone,
    IconWhatsApp,
    IconEnvelope
  },
}
</script>

<style lang="scss">
.main-card {
  position: relative;
  //height: 90%;
  min-width: 500px;
  background: #fff;
  box-shadow: -4px -10px 10px 12px rgb(0 0 0 / 10%);
  z-index: 15;
  border-radius: 4px;

  .card-started {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .block-photo {
      margin-bottom: 1rem;
      overflow: hidden;

      .image {
        width: 100%;
        padding: 0.5rem;
      }
    }

    .name {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      font-weight: bold;
      font-size: 1.3rem;
    }

    .speciality {
      color: var(--green);
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
        fill: var(--green);
      }
    }

    .icon {
      width: 25px;
      height: 25px;

      &:hover {
        fill: var(--green);
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
      align-items: center;

      //&:before {
      //  content: '';
      //  position: absolute;
      //  align-items: center;
      //  left: 50%;
      //  width: 1px;
      //  height: 100%;
      //  background: linear-gradient(to bottom, var(--gray), white);
      //}

      &:after {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, white, var(--gray), white);
      }
    }

    .link {
      cursor: pointer;
      color: black;
      width: 100%;

      &:hover {
        color: var(--green);
      }
    }
  }
}
  @media only screen and (max-width:1120px) {
    .main-card {
      width: 600px;
      margin-bottom: 1rem;
    }
  }

</style>