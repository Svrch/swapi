import { createRouter, createWebHistory } from 'vue-router'
import CharactersList from '@/pages/CharactersList.vue'
import CharactersHeight from '@/pages/CharactersHeight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'characters-list',
      component: CharactersList,
    },
    {
      path: '/characters-height',
      name: 'characters-height',
      component: CharactersHeight,
    },
  ],
})

export default router
