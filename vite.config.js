import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import mkcert from 'vite-plugin-mkcert'
// import fs from 'fs'
// import path from 'path'

export default defineConfig({
  plugins: [react(),mkcert(),svgr()],
  
})
