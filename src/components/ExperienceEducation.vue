<template>
  <div class="information-block">
    <div class="experience-education">
      <span class="title">опыт & образование</span>
      <div class="column">
        <div class="container">
          <icon-work class="icon"></icon-work>
          <h3 class="position">{{ experience.title }}</h3>
          <span class="position">{{ experience.position }}</span>
          <span>{{ experience.value }}</span>
        </div>
        <div class="container">
          <icon-education class="icon"></icon-education>
          <h3 class="position">{{ education.title }}</h3>
          <span class="position">{{ education.year }}</span>
          <span class="position">{{ education.faculty }}</span>
          <span>{{ education.speciality }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconEducation from "./icons/IconEducation";
import IconWork from "./icons/IconWork";

export default {
  name: "IconJob",
  components: {
    IconEducation,
    IconWork,
  },
  data: () => ({
    experience:{
      title: 'ООО "ИНТАС-Компани"',
      position: 'Инженер поддержки ИТ инфраструктуры',
      value: 'Диагностика и решение неисправностей в системах',
    },
    education:{
      title: 'УГАТУ - Уфимский Государственный Авиационный Технический Университет',
      faculty: 'Факультет информатики и робототехники',
      speciality: 'Автоматизированные системы обработки информации и управления',
      year: '2003-2008',
    },
  }),
}
</script>

<style lang="scss">

.experience-education {
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
    padding: 0.5rem;
  }

  .position {
    margin-bottom: 1rem;
  }
}
</style>
