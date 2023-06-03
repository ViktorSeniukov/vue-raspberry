<script setup>
    defineProps({
        errMessage: {
            type: String
        }
    })
</script>

<template>
    <div class="err">
        <h2 class="err__title">Error</h2>
        <p class="err__text">{{errMessage}}</p>
    </div>
</template>

<style scoped>
    @import "UiError.style.css";
</style>