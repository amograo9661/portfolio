import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * The resume you edit is src/assets/resume.pdf.
 * This copies it to public/resume.pdf so the Download Resume button can use /resume.pdf.
 */
function publishResume(): Plugin {
  const copy = () => {
    copyFileSync(resolve('src/assets/resume.pdf'), resolve('public/resume.pdf'))
  }

  return {
    name: 'publish-resume',
    buildStart: copy,
    configureServer() {
      copy()
    },
  }
}

export default defineConfig({
  plugins: [react(), publishResume()],
  server: {
    host: '0.0.0.0',
    port: 43123,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43123,
    strictPort: true,
  },
})
