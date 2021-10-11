import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import customIconsResolver from 'custom-icons-resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['iife'],
      name: 'MyLab',
      fileName: (format: string) => `index.${format}.js`,
    },
    // rollupOptions: {
    //   // Externalize deps that shouldn't be bundled into the library.
    //   external: ['vue', '@vueuse/core'],
    // },
    // sourcemap: true,
    // // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    Components({
      resolvers: [
        IconsResolver({ componentPrefix: '' }),
        customIconsResolver({
          prefix: 'custom-icon',
          iconsFolderPath: 'src/icons',
        }),
      ],
      dts: 'src/components.d.ts',
      dirs: ['../package/src/components'],
    }),
    Icons({
      autoInstall: true,
    }),
    vue({
      script: {
        refSugar: true,
      },
    }),
    AutoImport({
      imports: [
        'vue',
        // 'vue-i18n',
        // '@vueuse/head',
        // '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
})
