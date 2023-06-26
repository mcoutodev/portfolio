/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    test: {
        coverage: {
            provider: 'istanbul',
        },
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
        globals: true,
    },
});
