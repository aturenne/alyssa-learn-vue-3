<template>
  <!-- v-bind to bind an entire post to blogpost component -->
  <!-- recall: shorthand for binding three properties of post object to three props in BlogPost -->
  <BlogPost 
    v-for="post in posts" 
    :key="posts.id" 
    v-bind="post"
    @delete-blog-post="processDeletion"
  ></BlogPost>
  <!-- above: we use same name from child $emit to listen to it, call some method-->
</template>

<script setup>
import BlogPost from './BlogPost.vue'
import { ref } from 'vue'

let posts = ref([
  {
    id: 1,
    blogPostTitle: 'What is a muggle in HP world?',
    blogPostContent:
      'A muggle is a person who lacks any sort of magical ability...'
  },
  {
    id: 2,
    blogPostTitle:
      'HP and the Cursed Child Broadway production suspended until April',
    blogPostContent:
      'Adding to the earlier post, the Broadway production of Harry Potter and the Cursed Child has been...'
  },
  {
    id: 3,
    blogPostTitle: 'Potter DIY: Make Your Own “Harry Potter Puppet Pal”',
    blogPostContent:
      'We all remember those iconic YouTube videos of Harry and the gang and probably couldn’t get “The Mysterious...'
  },
  {
    id: 4,
    blogPostTitle: 'Fan Project Brings Life to “Harry Potter” in Translation',
    blogPostContent:
      'It’s no secret that the Harry Potter series is a global phenomenon, having been translated into over 80 languages to date....'
  }
])

//can use arguments from the child $emit method
//second argument from the BlogPost’s emit method will be passed as the first parameter of this method
function processDeletion(id) {
  let index = posts.value.findIndex(item=>item.id == id)
  posts.value.splice(index, 1)
}
</script>

<style scoped>

</style>