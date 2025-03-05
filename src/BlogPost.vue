<template>
    <div class="blog-post">
        <p>
            {{ message }}
        </p>
        <!-- Display the id, title, and content of a blog post. -->
        <h2>{{ id }} - {{ blogPostTitle }}</h2>
        <h4>{{ blogPostContent }}</h4>
        <!-- BlogPost doesn't have access to post array, so we notify parent what to do -->
        <!-- first argument: name of event (custom), second argument: which one to delete -->
        <button @click="$emit('delete-blog-post', id)">Delete post</button>
        <button @click="emitDeletePostEvent(id)">Delete post</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('This is the BlogPost component.')
defineProps(['id', 'blogPostTitle', 'blogPostContent'])

//optional, but recommended; documents the emits used by this child component
//required if using function like below
const emit = defineEmits(['delete-blog-post'])

function emitDeletePostEvent(id) {
    emit('delete-blog-post', id)
}
</script>

<style scoped>
.blog-post {
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}
</style>