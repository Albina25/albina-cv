<template>
  <div id="app">
    <div class="profile">
      <header class="header">
        <div class="icon-bar">
          <div class="icon-block" @click="setCurrentBlock('aboutMe')">
            <a :class="['icon-block-link', {'icon-block-link_active': currentBlock === 'aboutMe'}]">
              <icon-man class="icon-img"></icon-man>обо мне
            </a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('skills')">
            <a :class="['icon-block-link', {'icon-block-link_active': currentBlock === 'skills'}]">
              <icon-skills class="icon-img"></icon-skills>навыки & знания
            </a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('projects')">
            <a :class="['icon-block-link', {'icon-block-link_active': currentBlock === 'projects'}]">
              <icon-projects class="icon-img"></icon-projects>проекты
            </a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('win')">
            <a :class="['icon-block-link', {'icon-block-link_active': currentBlock === 'win'}]">
              <icon-win class="icon-img"></icon-win>чем отличилась
            </a>
          </div>
          <div class="icon-block" @click="setCurrentBlock('experienceEducation')">
            <a :class="['icon-block-link', {'icon-block-link_active': currentBlock === 'experienceEducation'}]">
              <icon-experience class="icon-img"></icon-experience>опыт & образование
            </a>
          </div>
        </div>
      </header>

      <div class="position-blocks">
        <card-started></card-started>

        <about-me id="aboutMe" class="test"></about-me>
        <my-skills id="skills" class="test"> </my-skills>
        <my-projects id="projects" class="test"></my-projects>
        <my-win id="win" class="test"></my-win>
        <experience-education id="experienceEducation" class="test"></experience-education>
      </div>
    </div>
  </div>
</template>

<script>
import CardStarted from './components/CardStarted.vue'
import AboutMe from './components/AboutMe.vue'
import ExperienceEducation from './components/ExperienceEducation.vue'
import MySkills from './components/MySkills.vue'
import MyProjects from './components/MyProjects.vue'
import MyWin from './components/MyWin.vue'
import IconMan from "./components/icons/IconMan.vue";
import IconWin from "./components/icons/IconWin.vue";
import IconSkills from "./components/icons/IconSkills.vue";
import IconExperience from "./components/icons/IconExperience.vue";
import IconProjects from "./components/icons/IconProjects.vue";

export default {
  name: 'App',
  components: {
    CardStarted,
    AboutMe,
    ExperienceEducation,
    MySkills,
    MyWin,
    MyProjects,
    IconMan,
    IconWin,
    IconSkills,
    IconExperience,
    IconProjects,
  },
  data() {
    return {
      currentBlock: 'aboutMe',
      mobileView: false,
    }
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  mounted() {
    this.openBlock(this.currentBlock);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleView);
  },

  methods: {
    setCurrentBlock(value) {
      this.currentBlock = value;
      if(!this.mobileView) {
        this.openBlock(value);
      } else {
        window.location.hash = value;
      }
    },

    openBlock(value) {
      const elem = document.getElementById(value);
      const currentElem = document.querySelector('.animatedIn');
      if (currentElem) {
        currentElem.classList.toggle('animatedIn');
      }
      elem.classList.add('animatedIn');
    },

    handleView() {
      if(window.innerWidth <= 1120) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    },
  },
  watch: {
    mobileView() {
      if (this.mobileView) {
        this.currentBlock = '';
      } else {
        this.currentBlock ? this.openBlock(this.currentBlock) : this.openBlock('aboutMe');
      }
    }
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

#app {
  text-align: center;
  font-size: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: var(--green);
  padding: 4rem 2rem;

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
    width: var(--icon-bar-size, 90px);
    //width: 90px;
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

        &_active {
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
  }

  .hidden {
    opacity: 0;
    visibility: hidden;
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
    padding: 1rem 0 0;

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
    padding: 1rem 0 0;
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
          min-height: 87px;
        }

        .icon-img {
          padding: 8px;
          height: 45px;
        }
      }
    }
  }
}

@media (min-width:1120px) {
  #app .profile {
    justify-content: flex-start;
    width: 90%;
  }

  .position-blocks {
    position: relative;
    width: calc(100% - var(--icon-bar-size, 90px));
  }

  .test {
    position: absolute;
    z-index: 0;
    left: 0;
    transition: left 1s;
  }

  .animatedIn {
    z-index: 10;
    animation-duration: 1s;
    left: 500px;
  }
}
</style>
