<template>
  <svg :width="size" :height="size" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path class="cls-1" d="M28,24H4a3,3,0,0,1-3-3V5A3,3,0,0,1,4,2H28a3,3,0,0,1,3,3V21A3,3,0,0,1,28,24ZM4,4A1,1,0,0,0,3,5V21a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1Z"/>
      <path class="cls-1" d="M21,30H11a1,1,0,0,1-1-1.16l1-6A1,1,0,0,1,12,22h8a1,1,0,0,1,1,.84l1,6A1,1,0,0,1,21,30Zm-8.82-2h7.64l-.67-4h-6.3Z"/>
      <path class="cls-1" d="M24,30H8a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"/><path class="cls-1" d="M30,19H2a1,1,0,0,1,0-2H30a1,1,0,0,1,0,2Z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 32
    },
    box: {
      type: [Number, String],
      default: 32
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.box} ${this.box}`
    }
  }
}
</script>