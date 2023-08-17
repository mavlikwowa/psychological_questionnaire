import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, "./src/"),
      '@fonts': path.resolve(__dirname, "./src/assets/fonts"),
      '@ui': path.resolve(__dirname, "./src/Components/UI"),
      '@images': path.resolve(__dirname, "./src/assets/images"),
    },
  },
})
