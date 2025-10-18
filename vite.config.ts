// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 🔑 THE FIX: Manually map the alias for the bundler
      '@': path.resolve(__dirname, './src'), 
    },
  },
});