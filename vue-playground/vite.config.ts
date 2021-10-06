import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import customIconsResolver from 'custom-icons-resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        IconsResolver({ componentPrefix: '' }),
        customIconsResolver({
          prefix: 'custom-icon',
          iconsFolderPath: '../package/src/icons',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Icons({
      autoInstall: true,
    }),
    vue({
      script: {
        refSugar: true,
      },
      customElement: false,
    }),
  ],
})
