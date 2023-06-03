<script lang="js">
  import {defineComponent} from "vue";
  import COLORS from "@/assets/color-variable";
  export default defineComponent({
    props: {
      href: {
        type: String,
        default: undefined
      },
      linkText: {
        type: String,
        default: undefined
      }
    },
    data() {
      return {
        hover: {
          isHover: false,
          class: 'nav-link--hover',
        },
      }
    },
    setup(props) {
      return {
        props,
        COLORS
      }
    }
  })
</script>

<template>
  <a
      :href="href"
      class="nav-link"
      :class="[hover.isHover ? hover.class : '']"
      @mouseover="hover.isHover = true"
      @mouseleave="hover.isHover = false"
  >{{linkText}}</a>
</template>

<style scoped>
  @import "UiNavLink.css";

  .nav-link:hover,
  .nav-link--hover {
    color: #73DB60;
  }
  //:style="{ color: COLORS.acceptDark }"
</style>