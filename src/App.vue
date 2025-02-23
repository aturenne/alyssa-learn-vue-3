<template>
  <h1>{{ message }}</h1>
  <p>
    What has keys but can't open locks, space but no room, and you can enter but
    can't go outside? What am I?
  </p>

  <button style="width: 200px" @click="showAnswer = !showAnswer">
    {{ !showAnswer ? 'Show me the answer!' : 'Hide the answer!' }}
  </button>

  <!-- if boolean expression is false, v-if element will not even be in the DOM tree -->
  <!-- real conditional rendering - good for security -->
  <div v-if="showAnswer">A keyboard.</div>

  <!-- element will always be rendered and remain in DOM tree at all times, it only toggles display element -->
  <div v-show="showAnswer">A keyboard.</div>

  <!-- 50% chance v-if is rendered, 50% v-else is rendered -->
  <!-- <div v-if="Math.random() > 0.5">Now you see me</div>
  <div v-else>Now you don't</div> -->
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, v-if!')

let showAnswer = ref(false)
</script>

<style scoped></style>
