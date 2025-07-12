import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/hianime-api': {
        target: 'https://arccrown.vercel.app/api/v2/hianime',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hianime-api/, ''),
        secure: true,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
