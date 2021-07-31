<template>
  <div id="app">
    <IconBar @set-сurrent-block="changeCurrentBlock" />
    <CardStarted />
<!--      <component  :is="currentBlock" :class="{animated:isVisible==true}"></component>-->
    <AboutMe v-show="currentBlock==='AboutMe'" :class="[{'animated':isVisible}]" />
    <Skills  v-show="currentBlock==='Skills'" :class="[{'animated1':currentBlock===!'Skills','animated':currentBlock==='Skills'}]"/>
    <Win v-show="currentBlock==='Win'" :class="[{'hidden':currentBlock==='Skills','animated':currentBlock==='Win'}]"/>
    <ExperienceEducation v-show="currentBlock==='ExperienceEducation'" :class="[{'animated1':currentBlock===!'ExperienceEducation', 'animated':currentBlock==='ExperienceEducation'}]" />
  </div>
</template>

<script>
import CardStarted from './components/CardStarted.vue'
import AboutMe from './components/AboutMe.vue'
import IconBar from './components/IconBar.vue'
import ExperienceEducation from './components/ExperienceEducation.vue'
import Skills from './components/Skills.vue'
import Win from './components/Win.vue'

export default {
  name: 'App',
  components: {
    CardStarted,
    AboutMe,
    IconBar,
    ExperienceEducation,
    Skills,
    Win,
  },
  data: () => ({
    currentBlock: 'AboutMe',
    isVisible: false,
    hidden: true,
  }),
  methods: {
    changeCurrentBlock(data) {
      this.currentBlock = data.currentBlock;
      this.isVisible = data.isVisible;
      console.log('app', this.isVisible)
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

body, html {
  height: 100%;
  background-color: var(--green);
  position: relative;
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
