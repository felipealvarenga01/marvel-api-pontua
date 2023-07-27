/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

dotenv.config({ path: '.env.test' });

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup-test-env.ts'],
        include: ['./app/**/*.{test,spec}.{ts,tsx}'],
        watchExclude: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
        exclude: ['build', 'node_modules', 'public'],
        coverage: {
            all: true,
            exclude: [
                '**/__tests__/**/*',
                'node_modules',
                'public/build/**/*',
                'build',
                'app/routes/**/*',
            ],
            include: ['app/**/*'],
            provider: 'istanbul',
            reporter: ['lcov'],
        },
    },
});