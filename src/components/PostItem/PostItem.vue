<script setup>
    defineProps({
        post: {
            type: Object
        }
    })
</script>

<template>
    <div class="post-item">
        <h2 class="post-item__title">{{post.title}}</h2>
        <p class="post-item__text">{{post.body}}</p>
        <img class="post-item__img" :src="'src/assets/avatar/id' + post.userId + '.jpg'" :alt="'Avatart ' + post.userId">
    </div>
</template>

<style scoped>
    @import "PostItem.style.css";
</style>