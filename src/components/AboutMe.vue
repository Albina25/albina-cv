<template>
  <div class="information-block">
    <div class="about-me">
      <span class="title">обо мне</span>
      <div class="content">
        <ul class="details">
          <li class="detail">
            <span class="field-title">имя</span>
            <span class="field-content">альбина кашапова</span>
          </li>
          <li class="detail">
            <span class="field-title">email</span>
            <span>
              <a class="detail-lint" href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJNwgHNmJkZCJdSRTzHvczBHFKQbMXVdRGPJzrzhMQjRmNsnCBNRQQmWMwJfzZtKdBwdRwg">axioma.25@gmail.com</a>
            </span>
          </li>
          <li class="detail">
            <span class="field-title">телефон</span>
            <span class="field-content">
              <a class="detail-lint" href="https://wa.me/79874991540">8-987-499-15-40</a>
            </span>
          </li>
<!--          <li class="detail" v-for="detail of details" :key="detail.title">-->
<!--            <span class="field-title">{{detail.title}}</span>-->
<!--            <span class="field-content">{{detail.content}}</span>-->
<!--          </li>-->
        </ul>
        <div class="text">
          <p>Привет! Меня зовут Альбина.<br>
            Ищу дружную команду для разработки сайтов.<br>
            Программирование - это бег с препятствиями, преодоление которых приносит новый багаж знаний и удовольствия.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
}

</script>

<style lang="scss">

.about-me {
  text-align: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .photo {
    width: 500px;
  }

  .field-title {
    background: var(--green);
    color: white;
    border-radius: 3px;
    padding: 0.2rem 0.3rem;
    text-transform: capitalize;
  }

  .content {
    padding: 0 4rem;
  }

  .field-content {
    text-transform: capitalize;
  }

  .detail-lint {
    //text-decoration: none;
    color: black;
  }

  .details {
    list-style-type: none;
    padding: 0;
    margin-bottom: 2rem;
  }

  .detail {
    position: relative;
    padding: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to left, white, #ddd, white);
    }
  }

  .text {
    display: flex;
    text-align: left;
    align-items: center;
    flex-grow: 1;
    line-height: 2rem;
    padding-bottom: 1rem;
  }
}
</style>
