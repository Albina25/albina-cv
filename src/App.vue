<template>
  <div id="app">
    <div class="profile">
      <header class="header">
        <div class="icon-bar">
          <div class="icon-block" @click="setCurrentBlock('AboutMe')">
            <a :class="['icon-block-link', {'active': currentBlock === 'AboutMe'}]" href="#aboutMe"><icon-man class="icon-img"></icon-man>обо мне</a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('Skills')">
            <a :class="['icon-block-link', {'active': currentBlock === 'Skills'}]" href="#skills"><icon-skills class="icon-img"></icon-skills>навыки & знания</a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('Win')">
            <a :class="['icon-block-link', {'active': currentBlock === 'Win'}]" href="#win"><icon-win class="icon-img"></icon-win>чем отличилась</a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('ExperienceEducation')">
            <a :class="['icon-block-link', {'active': currentBlock === 'ExperienceEducation'}]" href="#experienceEducation"><icon-experience class="icon-img"></icon-experience>опыт & образование</a>
          </div>
        </div>
      </header>

      <div class="position-blocks">
        <card-started></card-started>
        <about-me v-if=!mobileView v-show="currentBlock === 'AboutMe'" :class="{'animatedIn':isVisible}"></about-me>
        <about-me id="aboutMe" v-if="mobileView"></about-me>

        <skills v-if=!mobileView v-show="currentBlock === 'Skills'" :class="{'animatedIn':isVisible}"></skills>
        <skills id="skills" v-if="mobileView"></skills>

        <win v-if=!mobileView v-show="currentBlock === 'Win'" :class="[{'hidden':currentBlock === 'AboutMe','animatedIn':isVisible}]"></win>
        <win id="win" v-if="mobileView"></win>

        <experience-education v-if=!mobileView v-show="currentBlock === 'ExperienceEducation'" :class="[{'animatedOut':currentBlock === !'ExperienceEducation', 'animatedIn': isVisible}]"></experience-education>
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
    IconExperience,
  },
  data: () => ({
    currentBlock: 'AboutMe',
    isVisible: false,
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
        this.isVisible = false;
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

.animatedIn {
  animation-duration: 1s;
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

.animatedOut {
  animation-duration: 1s;
  animation-name: fadeOutLeft
}
@keyframes fadeOutLeft {
  100% {
    opacity: 0;
    transform: translate3d(-70%, 0, 0)
  }
  0% {
    opacity: 1;
    transform: none
  }
}

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
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
    z-index: 20;
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

      .icon-block-link {
        text-decoration: none;
        color: black;

        &:hover {
          fill: var(--green);
          color: var(--green);
        }
      }

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

  .activeBlock {
    opacity: 1;
    visibility: visible;
    transition: all 2s linear;
  }

  .position-blocks {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
@media only screen and (min-width:825px) and (max-width:1120px) {

  #app {
    padding: 0;
    padding-top: 1rem;

    .profile {
      width: 810px;
    }

    .position-blocks {
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
@media only screen and (max-width:824px) {
  #app {
    padding: 0;
    padding-top: 1rem;
    width: 100%;
    font-size: 14px;

    .profile {
      flex-direction: column;
    }

    .header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: white;
      border-bottom: 1px solid gray;
    }

    .position-blocks {
      display: flex;
      flex-direction: column;
      margin-top: 70px;
      left: 100%;
    }

    .icon-bar {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      margin: 0;
      border-radius: 0;
      position: relative;
      justify-content: space-around;

      .icon-block {
        width: 25%;
        padding: 0;
        position: relative;
        font-size: 12px;
        justify-content: flex-start;
        &:nth-last-child(n+1):after {
          content: '';
          position: absolute;
          left: 0;
          width: 1px;
          height: 100%;
          background: radial-gradient(ellipse at right, var(--lightgray), #fff 80%);
        }

        .icon-block-link {
          padding: 0.5rem;
          font-size: 0.7rem;
        }

        .icon-img {
          padding: 8px;
          height: 45px;

        }
      }
    }
  }
}
</style>
