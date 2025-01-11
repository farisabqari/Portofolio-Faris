import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/farisabqari.github.io/', // Ganti dengan nama repository GitHub Anda
  plugins: [react()],
})
