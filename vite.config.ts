import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './public/index.html',
        models: './public/models.html',
        main2: './public/main2.html'  // Asegúrate de añadir este archivo si estás usando main2
      }
    }
  }
});