import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
      },
    },
  },
})

