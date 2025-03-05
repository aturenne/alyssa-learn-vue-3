<template>
    <div class="blog-post">
        <p>
            {{ message }}
        </p>
        <!-- Display the id, title, and content of a blog post. -->
        <h2>{{ id }} - {{ blogPostTitle }}</h2>
        <div>
            Modify the title:
            <input type="text" v-model="blogPostTitle"/>
        </div>
        <h4>{{ blogPostContent }}</h4>
        <!-- rather than using props (emit, parent handles it), use v-model in parent App-->
        <div>
            Modify the content:
            <input type="text" v-model="blogPostContent"/>
        </div>
        <!-- BlogPost doesn't have access to post array, so we notify parent what to do -->
        <!-- first argument: name of event (custom), second argument: which one to delete -->
        <button @click="$emit('delete-blog-post', id)">Delete post</button>
        <button @click="emitDeletePostEvent(id)">Delete post</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('This is the BlogPost component.')
defineProps(['id'])

//optional, but recommended; documents the emits used by this child component
//required if using function like below
const emit = defineEmits(['delete-blog-post'])

function emitDeletePostEvent(id) {
    emit('delete-blog-post', id)
}

//argument: which v-model, if there are many in the parent template tag
let blogPostContent = defineModel('blogPostContent') //blogPostContent is a ref object - reactive. changes shown when it is used in h4
let blogPostTitle = defineModel('blogPostTitle')
</script>

<style scoped>
.blog-post {
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

input {
    width: 100%;
}
</style>