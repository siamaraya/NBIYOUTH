import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves under /NBIYOUTH/ — set GHPAGES=true in CI build
  base: process.env.GHPAGES ? '/NBIYOUTH/' : '/',
  plugins: [react(), tailwindcss()],
})
