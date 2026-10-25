import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User page (Omer684.github.io) is served from the domain root, so base stays "/".
export default defineConfig({ plugins: [react()] });
