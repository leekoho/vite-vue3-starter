import { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export const setupRouter = (app: App) => {
  app.use(router)
}

if (import.meta.env.DEV) console.log(`🚀 由vite-plugin-pages插件自动生成的路由: `, routes)
