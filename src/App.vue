<template>
  <div id="app">
    <div class="profile">
      <header class="header">
        <div class="icon-bar">
          <div :class="['icon-block', {'active': currentBlock === 'AboutMe'}]" @click="setCurrentBlock('AboutMe')">
            <a class="icon-block-link" href="#aboutMe"><icon-man class="icon-img"></icon-man>обо мне</a>
          </div>
          <div :class="['icon-block', {'active': currentBlock === 'Skills'}]" @click="setCurrentBlock('Skills')">
            <a class="icon-block-link" href="#skills"><icon-skills class="icon-img"></icon-skills>навыки & знания</a>
          </div>
          <div :class="['icon-block', {'active': currentBlock === 'Win'}]" @click="setCurrentBlock('Win')">
            <a class="icon-block-link" href="#win"><icon-win class="icon-img"></icon-win>чем отличилась</a>
          </div>
          <div :class="['icon-block', {'active': currentBlock === 'ExperienceEducation' }]" @click="setCurrentBlock('ExperienceEducation')">
            <a class="icon-block-link" href="#experienceEducation"><icon-experience class="icon-img"></icon-experience>опыт & образование</a>
          </div>
        </div>
      </header>

      <div class="position">
        <card-started></card-started>
        <about-me v-if=!mobileView v-show="currentBlock === 'AboutMe'" :class="{'animated':isVisible}"></about-me>
        <about-me id="aboutMe" v-if="mobileView"></about-me>

        <skills v-if=!mobileView v-show="currentBlock === 'Skills'" class="animated"></skills>
        <skills id="skills" v-if="mobileView"></skills>

        <win v-if=!mobileView v-show="currentBlock === 'Win'" :class="[{'hidden':currentBlock === 'Skills','animated':currentBlock === 'Win'}]"></win>
        <win id="win" v-if="mobileView"></win>

        <experience-education v-if=!mobileView v-show="currentBlock === 'ExperienceEducation'" :class="[{'animated1':currentBlock === !'ExperienceEducation', 'animated': currentBlock === 'ExperienceEducation'}]"></experience-education>
        <experience-education id="experienceEducation" v-if="mobileView"></experience-education>
      </div>
    </div>
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
    mobileView: false,
  }),
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  methods: {
      setCurrentBlock(value) {
        this.currentBlock = value;
        this.isVisible = true;
      },
    handleView() {
      if(window.innerWidth <= 1120) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    },
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;

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

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: var(--green);
  padding: 8rem 2rem;

  .profile {
    display: flex;
    flex-direction: row;
  }
  .header {
    display: flex;
    align-items: center;
  }
  .icon-bar {
    width: 90px;
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

      .icon-block-link {
        text-decoration: none;
        color: black;
        &:hover {
          fill: var(--green);
          color: var(--green);
        }
        &:active {
          fill: var(--green);
          color: var(--green);
        }
      }

      //&:hover {
      //  fill: var(--green);
      //  color: var(--green);
      //}

      &:nth-last-child(n+2):before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: radial-gradient(ellipse at right, var(--lightgray), #fff 80%);
      }

      .icon-img {
        padding: 16px;
        width: 100%;
        height: 68px;
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
  }

  .active {
    opacity: 1;
    //visibility: visible;
    //display: block;
    transition: all 2s linear;
  }

  .position {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
  @media only screen and (max-width:1120px) {
    #app {
      padding: 1rem 0;

      .profile {
        width: 810px;
      }

      .position {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
        position: relative;
      }

      .icon-bar {
        position: fixed;
        top: 1rem;
      }
    }
  }
</style>
