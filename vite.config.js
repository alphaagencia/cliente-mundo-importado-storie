import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Projeto vive em pasta do OneDrive: o fs.watch nativo trava (EBUSY) quando
    // o OneDrive sincroniza arquivos. Polling evita o watch nativo.
    watch: { usePolling: true, interval: 300 },
  },
})
