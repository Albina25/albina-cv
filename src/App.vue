<template>
  <div id="app">
    <div class="icon-bar">
      <div :class="['icon-block', {'active': currentBlock === 'AboutMe'}]" @click="setCurrentBlock('AboutMe')">
        <icon-man class="icon-img"></icon-man>обо мне
      </div>
      <div :class="['icon-block', {'active': currentBlock === 'Skills'}]" @click="setCurrentBlock('Skills')">
        <icon-skills class="icon-img">навыки & знания</icon-skills>
      </div>
      <div :class="['icon-block', {'active': currentBlock === 'Win'}]" @click="setCurrentBlock('Win')">
        <icon-win class="icon-img"></icon-win>чем отличилась
      </div>
      <div :class="['icon-block', {'active': currentBlock === 'ExperienceEducation' }]" @click="setCurrentBlock('ExperienceEducation')">
        <icon-experience class="icon-img"></icon-experience>опыт & образование
      </div>
    </div>
    <card-started></card-started>
    <about-me v-show="currentBlock === 'AboutMe'" :class="[{'animated':isVisible}]"></about-me>
    <skills  v-show="currentBlock === 'Skills'" :class="[{'animated1':currentBlock===!'Skills','animated':currentBlock==='Skills'}]"></skills>
    <win v-show="currentBlock === 'Win'" :class="[{'hidden':currentBlock==='Skills','animated':currentBlock==='Win'}]"></win>
    <experience-education v-show="currentBlock==='ExperienceEducation'" :class="[{'animated1':currentBlock===!'ExperienceEducation', 'animated': currentBlock==='ExperienceEducation'}]"></experience-education>
  </div>
</template>

<script>
import CardStarted from './components/CardStarted.vue'
import AboutMe from './components/AboutMe.vue'
import ExperienceEducation from './components/ExperienceEducation.vue'
import Skills from './components/Skills.vue'
import Win from './components/Win.vue'
import IconMan from "./components/icons/IconMan.vue";
import IconWin from "./components/icons/IconWin.vue";
import IconSkills from "./components/icons/IconSkills.vue";
import IconExperience from "./components/icons/IconExperience.vue";

export default {
  name: 'App',
  components: {
    CardStarted,
    AboutMe,
    ExperienceEducation,
    Skills,
    Win,
    IconMan,
    IconWin,
    IconSkills,
    IconExperience
  },
  data: () => ({
    currentBlock: 'AboutMe',
    isVisible: false,
    hidden: true,
  }),
  methods: {
    setCurrentBlock(value) {
      this.currentBlock = value;
      this.isVisible = true;
    }
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body, html {
  height: 100%;
  background-color: var(--green);
  position: relative;
}

.animated {
  animation-duration: 2s;
  animation-name: fadeInLeft
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-70%, 0, 0)
  }
  100% {
    opacity: 1;
    transform: none
  }
}

.animated1 {
  animation-duration: 2s;
  animation-name: fadeOutLeft
}
@keyframes fadeOutLeft {
  100% {
    opacity: 0;
    transform: translate3d(-70%, 0, 0)
  }
  0% {
    opacity: 1;
    //transform: none
  }
}


  %cube {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    opacity: 50%;
    left: 0;
    overflow: hidden;
    background-color: var(--green);
    transform: translateX(50%) translateY(50%) rotate(-55deg);
  }

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--green);
  .icon-bar {
    width: 6rem;
    border-radius: 4px;
    background-color: #fff;
    margin-right: 1rem;

    .icon-block {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      width: 100%;
      text-align: center;
      padding-bottom: 1rem;
      text-transform: uppercase;
      font-size: 0.7rem;
      color: black;

      &:hover {
        fill: var(--green);
        color: var(--green);
      }

      &:nth-last-child(n+2):before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: radial-gradient(ellipse at right,var(--lightgray),#fff 80%);
      }

      .icon-img {
        padding: 16px;
        width: 100%;
        height: 100%;
      }
    }
    .active {
      fill: var(--green);
      color: var(--green);
    }
  }

  .hidden {
    opacity: 0;
    visibility: hidden;
    transition: all 2s linear;
    //@keyframes fadeInLeft {
    //  0% {
    //    opacity: 0;
    //    transform: translate3d(-70%, 0, 0)
    //  }
    //  100% {
    //    opacity: 1;
    //    transform: none
    //  }
  }

  .active {
    opacity: 1;
    //visibility: visible;
    //display: block;
    transition: all 2s linear;
  }
}
</style>
