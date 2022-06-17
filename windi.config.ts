import { defineConfig } from 'windicss/helpers'
import lineClampPlugin from 'windicss/plugin/line-clamp'
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import typographyPlugin from 'windicss/plugin/typography'
import animationsPlugin from '@windicss/plugin-animations'

export default defineConfig({
  darkMode: 'class',
  shortcuts: {
    'hor-start': 'flex justify-start items-center',
    'hor-between': 'flex justify-between items-center',
    'hor-end': 'flex justify-end items-center',
    'hor-around': 'flex justify-around items-center',
    'hor-center': 'flex justify-center items-center',
  },
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [lineClampPlugin, aspectRatioPlugin, typographyPlugin(), animationsPlugin()],
})
