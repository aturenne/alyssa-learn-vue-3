<template>
  <BaseLayout>
    <!-- will replace slot with name header -->
     <!-- shortcut: #header -->
    <template v-slot:header>
      <h1>Here might be a page title.</h1>
    </template>
    <!-- will replace slot with name main in child-->
    <template v-slot:main>
      <p>
        A paragraph of the main content.
      </p>
      <p>
        And another one.
      </p>
    </template>
    <template v-slot:footer>
      <p>Here's some content info.</p>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>

<style lang="scss" scoped>

</style>