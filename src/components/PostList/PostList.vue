<script setup>
    import PostItem from "@/components/PostItem/PostItem.vue";

    defineProps({
        posts: Array
    })

    function randomPosts (posts) {
        if (!posts) {
            return;
        }
        return posts.sort(() => Math.random() - 0.5);
    }
</script>

<template>
    <ul class="posts">
        <li
            v-for="post in randomPosts(this.posts)"
            :key="post.id"
            class="posts__item"
        >
            <PostItem
                :post="post"
            />
        </li>
    </ul>
</template>

<style scoped>
    @import "PostList.style.css";
</style>