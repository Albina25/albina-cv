<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="size"
       :height="size"
       :viewBox="viewBox"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 48
    },
    box: {
      type: [Number, String],
      default: 48
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.box} ${this.box}`
    }
  }
}

</script>

<style scoped>
svg {
  /*display: inline-block;*/
  /*vertical-align: baseline;*/
  /*margin-bottom: -2px; !* yes, I'm that particular about formatting *!*/
}
</style>>