<template>
  <div class="information-block">
    <div class="projects">
      <span class="title">Проекты</span>
      <div class="column">
        <div v-for="project in projects" class="container" :key="project.id">
          <div class="projects_item">
            <a :href="project.url" target="_blank" class="projects_item-link">
              <h3>{{ project.title }}</h3>
              <span class="projects_item-text">{{ project.discription }}</span>
            </a>
          </div>
<!--          <h3 class="position">{{ project.title }}</h3>
          <a :href="project.url" target="_blank" class="position">
            <img class="img-project" :src="project.src" alt="project">
          </a>
          <span>{{ project.discription }}</span>-->
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "IconJob",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Remember me',
          url: 'https://albina25.github.io/simon-the-game',
          src: 'img/img-projects/simon-the-game.png',
          discription: 'Увлекательная игра, которая развивает память и наблюдательность',
        },
        {
          id: 2,
          title: 'Тест',
          /*url: 'https://github.com/albina25/tests',*/
          url: 'https://albina25.github.io/tests',
          src: 'img/img-projects/tests.png',
          discription: 'Система для прохождения тестирования с учетом времени прохождения и результатом',
        }
      ],
    }
  }
}
</script>

<style lang="scss">

.projects {
  text-align: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 12rem;
    justify-content: center;
    align-items: center;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to left, white, #ddd, white);
    }
  }

  .icon {
    fill: var(--green);
    width: 80px;
    height: 80px;
    padding: 0.5rem;
  }

  .position {
    margin-bottom: 1rem;
  }

  .img-project {
    border: 2px solid var(--green);
    height: 180px;

    &:hover {
      size: 105%;
      color: var(--green);
      fill: var(--green);
    }
  }

  .projects_item {
    background-color: rgba(var(--lightgray-rgb), 0.5);
    width: 100%;

    &-text {
      font-size: 0.8rem;
    }
  }

  .projects_item-link {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid var(--green);
  }
}
</style>
