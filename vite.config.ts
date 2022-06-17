import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import HtmlEnv from 'vite-plugin-html-env'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // see https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // see https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // see https://github.com/lxs24sxl/vite-plugin-html-env
    HtmlEnv(),
    // see https://windicss.org/integrations/vite.html
    WindiCSS(),
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})
