import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Update this base path to match your GitHub repository name
  // If your repo is "hrithik-portfolio", keep it as "/hrithik-portfolio/"
  // If your repo is "portfolio" or something else, change accordingly
  // For root domain deployment, use "/"
  base: process.env.NODE_ENV === 'production' ? '/hrithik-portfolio/' : '/',
})
