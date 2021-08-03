<template>
  <div class="experience-education">
    <span class="title">опыт & образование</span>
    <div class="triangle"></div>
    <div class="column">
      <div class="container">
        <icon-education class="icon"></icon-education>
<!--        <icon-job class="icon"></icon-job>-->
        <h3 class="position">{{experience.title}}</h3>
        <span class="position">{{experience.position}}</span>
        <span>{{experience.value}}</span>
      </div>
      <div class="container">
        <icon-education class="icon"></icon-education>
        <h3 class="position">{{education.title}}</h3>
        <span class="position">{{education.year}}</span>
        <span class="position">{{education.faculty}}</span>
        <span>{{education.speciality}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconEducation from "./icons/IconEducation";
// import IconJob from "./icons/IconJob";

export default {
  name: "IconJob",
  components: {
    IconEducation,
    // IconJob
  },
  data: () => ({
    experience:{
      title:'ООО "ИНТАС-Компани"',
      position: 'Инженер поддержки ИТ инфраструктуры',
      value: 'Диагностика и решение неисправностей в системах',
    },
    education:{
      title:'УГАТУ - Уфимский Государственный Авиационный Технический Университет',
      faculty:'Факультет информатики и робототехники',
      speciality:'Автоматизированные системы обработки информации и управления',
      year:'2003-2008',
    },


  }),
}

</script>

<style lang="scss">

.experience-education {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  display: flex;
  width: 50%;
  height: 70%;
  max-width: 700px;
  flex-direction: column;

  &:after {
    //@extend %cube;
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    opacity: 50%;
    //bottom: top;
    left: 0;
    overflow: hidden;
    background-color: var(--green);
    transform: translateX(50%) translateY(50%) rotate(-55deg);
  }

  .column {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    justify-content: center;
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
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
    fill:var(--green);
    width: 80px;
    height: 80px;
    //padding: 1rem;
  }

  .position {
    margin-bottom: 1rem;
  }
}
</style>
