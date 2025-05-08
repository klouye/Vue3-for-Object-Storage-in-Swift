import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig({
  base: "./", // 将资源的绝对路径路径改为相对路径
  server: {
    proxy: {
      '/api/info': {
        target: 'http://192.168.10.30:8080/info',
        changeOrigin: true,
        secure: false,
        rewrite: (path)=>path.replace(/^\/api\/info/, ''),
      },
      '/api/v1': {
        target: 'http://192.168.10.30:8080/v1',
        changeOrigin: true,
        secure: false,
        rewrite: (path)=>path.replace(/^\/api\/v1/,'')
      },
      '/api/v3': {
        target: 'http://192.168.10.30:5000/v3',
        changeOrigin: true,
        secure: false,
        rewrite: (path)=>path.replace(/^\/api\/v3/,'')
      }
    }
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
