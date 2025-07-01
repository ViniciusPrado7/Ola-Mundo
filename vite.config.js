import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        inicio: resolve(__dirname, './src/pages/Inicio.jsx'),
        NaoEncontrada: resolve(__dirname, './src/pages/NaoEncontrada.jsx'),
        post: resolve(__dirname, './src/pages/Post.jsx'),
        sobreMim: resolve(__dirname, './src/pages/SobreMim.jsx'),
      }
    }
  }
})