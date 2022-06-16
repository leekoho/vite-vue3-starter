import { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export const setupRouter = (app: App) => {
  app.use(router)
}

if (import.meta.env.DEV) console.log(`🚀 自动生成的路由: `, routes)
