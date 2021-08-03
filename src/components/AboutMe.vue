<template>
  <div class="about-me">
    <span class="title">обо мне</span>
    <div class="triangle"></div>
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

.title {
  text-transform: uppercase;
  display: flex;
  text-align: left;
  position: relative;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem;

  &:before {
    content: '';
    position: absolute;
    left: -30px;
    right:0;
    bottom:0;
    width: 100%;
    height: 1px;
    background: radial-gradient(ellipse at left,dimgray,#fff 80%);
  }
}
.about-me {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  display: flex;
  width: 50%;
  max-width: 700px;
  height: 70%;
  flex-direction: column;

  &:after {
    //@extend %cube;
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    opacity: 50%;
    bottom: top;
    left: 0;
    overflow: hidden;
    background-color: var(--green);
    transform: translateX(50%) translateY(50%) rotate(-55deg);
  }

  .photo {
    width: 500px;
  }

  .field-title {
    background: var(--green);
    color: white;
    //border: 2px solid var(--green;
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
