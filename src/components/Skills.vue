<template>
  <div class="skills">
    <h2 class="title">{{title}}</h2>
    <div class="triangle"></div>
    <div class="column">
      <div class="container">
        <div><icon-graphic class="icon-skills"></icon-graphic></div>
        <h3 class="title-skills">графика</h3>
        <ul>
          <li class="skill" v-for="(graphic, index) of graphics" :key="`graphic-${index}`">
            {{graphic}}
          </li>
        </ul>
      </div>
      <div class="container">
        <div><icon-keyboard class="icon-skills"></icon-keyboard></div>
        <h3 class="title-skills">дополнительно</h3>
        <ul>
          <li class="skill" v-for="(moreSkill, index) of moreSkills" :key="`moreSkill-${index}`">
            {{moreSkill}}
          </li>
        </ul>
      </div>
      <div class="container">
        <div><icon-desktop class="icon-skills"></icon-desktop></div>
        <h3 class="title-skills">front-end разработка</h3>
        <ul>
          <li class="skill" v-for="(item, index) of frontend" :key="`frontend-${index}`">
            {{item}}
          </li>
        </ul>
      </div>
<!--      <div class="container"></div>-->
    </div>
  </div>
</template>

<script>
import IconDesktop from './icons/IconDesktop.vue'
import IconKeyboard from './icons/IconKeyboard.vue'
import IconGraphic from './icons/IconGraphic.vue'

export default {
  name: "Skills",
  components: {
    IconDesktop,
    IconKeyboard,
    IconGraphic
  },
  data: () => ({
    title: 'навыки & знания',
    graphics: ['Adobe Photoshop', 'Adobe Premiere Pro'],
    frontend: ['HTML5', 'CSS3', 'Java Script', 'Vue.js', 'Nuxt.js'],
    moreSkills: ['GIT', 'English'],
  })
}

</script>

<style lang="scss">

.skills {
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

  .column {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    height: 83%;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 1px;
      height: 100%;
      background: linear-gradient(var(--lightgray), white);
    }
  }

  .title-skills {
    text-transform: capitalize;
    margin-bottom: 0.3rem;
  }

  .skill {
    list-style-type: none;
    font-size: 0.9rem;
    width: 100%;
    line-height: 1.5rem;
  }

  .icon-skills {
    fill: var(--green);
    width: 70px;
    height: 70px;
    margin-bottom: 1rem;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding: 1rem;
    height: 50%;

    &:last-child {
      height: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      align-items: center;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: linear-gradient(to left, white, var(--lightgray), white);
    }

  }
}
</style>
