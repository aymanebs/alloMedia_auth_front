import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import svgr from 'vite-plugin-svgr'
import fs from 'fs'

export default defineConfig({
  plugins: [react(), mkcert(), svgr()],
  // server: {
  //   https: {
  //     key: fs.readFileSync('/app/localhost-key.pem'),
  //     cert: fs.readFileSync('/app/localhost.pem'),
  //   },
  //   host: '0.0.0.0',
  //   port: 5173,
  // },
})