<script setup>
import UiError from "@/components/UiError/UiError.vue";
import PostList from "@/components/PostList/PostList.vue";
import UiLoading from "@/components/UiLoading/UiLoading.vue";
import { getData } from "@/api/api";

const { data, error } = getData();
</script>

<template>
  <UiError
      v-if="error"
      :err-message="error"
  />
  <PostList
      v-else-if="data"
      :posts="data"
  />
  <UiLoading
      v-else
  >
    Loading...
  </UiLoading>
</template>

<style scoped>

</style>