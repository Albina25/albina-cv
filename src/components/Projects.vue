<template>
  <div class="information-block">
    <div class="projects">
      <span class="title">Проекты</span>
      <div class="column">
        <div class="container">
          <h3 class="position">{{projects.title}}</h3>
          <a :href="projects.url" target="_blank" class="position">
            <img class="img-project" :src="projects.src" alt="project">
          </a>
          <span>{{projects.discription}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "IconJob",
  data: () => ({
    projects:{
      title:'Тесты',
      url: 'https://github.com/albina25/tests',
      src: '/img/img-projects/tests.png',
      discription: 'Здесь пока размещу один небольшой проект',
    },

  }),
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

    &:hover {
      size: 105%;
      color: var(--green);
      fill: var(--green);
    }
  }
}
</style>
