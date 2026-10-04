import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Must match the GitHub Pages repository name; use '/' for a root domain
  base: command === 'build' ? '/Hrithik-portfolio/' : '/',
}))
