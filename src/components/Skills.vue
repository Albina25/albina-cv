<template>
  <div class="information-block">
    <div class="skills">
      <h2 class="title">{{title}}</h2>
      <div class="row">
        <div class="column">
          <div>
            <div><icon-desktop class="icon-skills"></icon-desktop></div>
            <h3 class="title-skills">front-end разработка</h3>
            <ul>
              <li class="skill" v-for="(item, index) of frontend" :key="`frontend-${index}`">
                {{item}}
              </li>
            </ul>
          </div>
        </div>

        <div class="column">
          <div class="container-right">
            <div><icon-graphic class="icon-skills"></icon-graphic></div>
            <h3 class="title-skills">графика</h3>
            <ul>
              <li class="skill" v-for="(graphic, index) of graphics" :key="`graphic-${index}`">
                {{graphic}}
              </li>
            </ul>
          </div>
          <div class="container-right">
            <div><icon-keyboard class="icon-skills"></icon-keyboard></div>
            <h3 class="title-skills">дополнительно</h3>
            <ul>
              <li class="skill" v-for="(moreSkill, index) of moreSkills" :key="`moreSkill-${index}`">
                {{moreSkill}}
              </li>
            </ul>
          </div>
        </div>

      </div>
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
  text-align: center;
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;

  .row {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100%;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 1px;
      height: 100%;
      background: linear-gradient(to bottom, var(--lightgray), white);
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;
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

  .container-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    height: 50%;


    &:nth-last-child(n+2):before {
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
