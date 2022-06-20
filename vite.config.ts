import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import HtmlEnv from 'vite-plugin-html-env'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
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
    // see https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'types/components.d.ts',
    }),
    // see https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts',
    }),
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
})
