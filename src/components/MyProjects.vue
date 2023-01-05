<template>
  <div class="information-block">
    <div class="projects">
      <span class="title">Проекты</span>
      <div class="column">
        <div v-for="project in projects" class="container" :key="project.id">
          <h3 class="position">{{ project.title }}</h3>
          <a :href="projects.url" target="_blank" class="position">
            <img class="img-project" :src="project.src" alt="project">
          </a>
          <span>{{ project.discription }}</span>
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
          discription: 'Увлекательная игра, которая развивает память, наблюдательность',
        },
        {
          id: 2,
          title: 'Тесты',
          url: 'https://github.com/albina25/tests',
          src: 'img/img-projects/tests.png',
          //discription: 'Тестирование',
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
}
</style>
