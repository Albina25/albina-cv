<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
    <path d="M3.6,7.8 C5,10.6 7.4,12.9 10.2,14.4 L12.4,12.2 C12.7,11.9 13.1,11.8 13.4,12 C14.5,12.4 15.7,12.6 17,12.6 C17.6,12.6 18,13 18,13.6 L18,17 C18,17.6 17.6,18 17,18 C7.6,18 0,10.4 0,1 C0,0.4 0.4,0 1,0 L4.5,0 C5.1,0 5.5,0.4 5.5,1 C5.5,2.2 5.7,3.4 6.1,4.6 C6.2,4.9 6.1,5.3 5.9,5.6 L3.6,7.8 L3.6,7.8 Z" id="Shape"/>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 18
    },
    box: {
      type: [Number, String],
      default: 18
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.box} ${this.box}`
    }
  }
}
</script>