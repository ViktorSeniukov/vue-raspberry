<script lang="js">
  import {defineComponent} from "vue";

  export default defineComponent({
    props: {
      style: {
        type: Object,
        default: undefined,
      }
    },
    setup(props) {
      return {
        style: props.style,
      };
    },
  });
</script>

<template>
  <span
      class="logo"
      :style="style"
  >
    <slot name="logo-text"></slot>
  </span>
</template>

<style scoped>
@import "UiLogo.css";
</style>