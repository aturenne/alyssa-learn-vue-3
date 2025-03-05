<template>
  <h1>Message: {{ message }}</h1>
  <div style="background-color: orange; padding-left: 10px;">
    <ComponentA></ComponentA>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import ComponentA from './ComponentA.vue'

let message = ref('Hello, Provide/inject!')

function updateMessage() {
  message.value = 'Hello, Provide/inject! Updated.'
}

//object provides mutation function for when you want to update injector component data to provider component
provide('msg', {message, updateMessage})

//componentA and B can only use the value, not mutate it
let count = ref(0)
provide('read-only-count', readonly(count))
</script>

<style scoped>

</style>