<script lang="js">
  import UiLogo from "@/components/UiLogo/UiLogo.vue";
  import COLORS from "@/assets/color-variable";
  import {defineComponent, computed} from "vue";

  export default defineComponent({
    name: 'UiHeader',
    components: {
      UiLogo,
    },
    props: {
      logoName: {
        type: String,
        default: undefined,
      }
    },
    setup(props) {
      const logo = computed(() => props.logoName.toUpperCase())
      return {
        logo,
        COLORS,
      };
    },
  });
</script>

<template>
  <div class="header">
    <UiLogo
        :style="{ 'color': COLORS.primaryLight }"
    >
      <template #logo-text>{{logo}}</template>
    </UiLogo>
    <slot name="navigation"></slot>
  </div>
</template>

<style scoped>
    @import "UiHeader.style.css";
</style>