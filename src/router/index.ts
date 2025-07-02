import { createRouter, createWebHistory } from 'vue-router'
import SettingsPage from '@/pages/settings/ui/SettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
    },
  ],
})

export default router
