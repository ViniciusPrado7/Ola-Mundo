import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname, 'index.html'),
        inicio: resolve(dirname, './src/pages/Inicio.jsx'),
        NaoEncontrada: resolve(dirname, './src/pages/NaoEncontrada.jsx'),
        post: resolve(dirname, './src/pages/Post.jsx'),
        sobreMim: resolve(dirname, './src/pages/SobreMim.jsx'),
      }
    }
  }
})