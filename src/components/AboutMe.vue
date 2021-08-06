<template>
  <div class="information-block">
    <div class="about-me">
      <span class="title">обо мне</span>
<!--      <div class="triangle"></div>-->
      <div class="content">
        <ul class="details">
          <li class="detail" v-for="detail of details" :key="detail.title">
            <span class="field-title">{{detail.title}}</span>
            <span class="field-content">{{detail.content}}</span>
          </li>
        </ul>
        <div class="text">
          <p>Привет! Меня зовут Альбина.<br>
            Я начинающий web-разработчик.<br>
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
  data: () => ({
    details: [
      {title: 'Имя', content: 'Альбина Кашапова'},
      {title: 'Email', content: 'axioma.25@gmail.com'},
      {title: 'Телефон', content: '8-987-499-15-40'},
    ],
  })
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
  }
  .content {
    padding: 0 4rem;
  }

  .details {
    list-style-type: none;
    padding: 0;
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
    height: 70%;
    flex-grow: 1;
    line-height: 2rem;
  }
}
</style>
