import { createRouter, createWebHistory } from 'vue-router'

//import the components we want to route to
import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'

//create a router instance
const router = createRouter({
    //provide the history implementation to use. We are using the HTML5
    history: createWebHistory(),
    //define some routes, each route record should map to a component
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/blogPosts', name: 'blogPosts', component: BlogPosts},
        {path: '/about', name: 'about', component: About},
    ]
})

//export the router instance
export default router;