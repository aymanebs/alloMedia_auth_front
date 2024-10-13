import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs'

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    host: '0.0.0.0',
    port: 5173,
  },
  test: {
    environment: 'jsdom', 
    globals: true,
  },
})