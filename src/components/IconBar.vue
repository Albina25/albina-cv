<template>
    <div class="icon-bar">
      <div :class="['icon-block', { 'active': currentBlock === 'AboutMe' }]" @click="setCurrentBlock('AboutMe')">
        <icon-man class="icon-img"></icon-man>обо мне
      </div>
      <div :class="['icon-block', { 'active': currentBlock === 'Skills' }]" @click="setCurrentBlock('Skills')">
        <icon-skills class="icon-img"></icon-skills>навыки & знания
      </div>
      <div :class="['icon-block', { 'active': currentBlock === 'Win' }]" @click="setCurrentBlock('Win')">
        <icon-win :class="['icon-img', {'active': currentBlock === 'Win' }]"></icon-win>чем отличилась
      </div>
      <div :class="['icon-block', { 'active': currentBlock === 'ExperienceEducation' }]" @click="setCurrentBlock('ExperienceEducation')">
        <icon-experience class="icon-img"></icon-experience>опыт & образование
      </div>
<!--      <div class="icon-block"><i class="fas fa-at icon-img"></i>контакты</div>-->
    </div>
</template>

<script>
import IconMan from "./icons/IconMan.vue";
import IconWin from "./icons/IconWin.vue";
import IconSkills from "./icons/IconSkills.vue";
import IconExperience from "./icons/IconExperience.vue";


export default {
  name: 'IconBar',
  components: {
    IconMan,
    IconWin,
    IconSkills,
    IconExperience
  },
  data() {
    return {
      currentBlock: 'AboutMe',
    }
  },
  methods: {
    setCurrentBlock(value) {
      this.isVisible = true;
      this.currentBlock=value;
      this.$emit('set-сurrent-block', { 'currentBlock':value, 'isVisible':this.isVisible });
      console.log(1, this.currentBlock)
    },
  },
}
</script>

<style lang="scss">
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


</style>
