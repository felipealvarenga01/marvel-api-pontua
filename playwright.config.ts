import { defineConfig } from '@playwright/test';

export default defineConfig({
    globalSetup: require.resolve('./tests/global-setup'),
    forbidOnly: !!process.env.CI,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['json', { outputFile: 'playwright-report/test-results.json' }],
    ],
    retries: process.env.CI ? 2 : 0,
    use: {
        trace: 'on-first-retry',
        channel: 'chrome',
    },
    testDir: './e2e',
    timeout: 15000,
    webServer: {
        command: 'npm run start:e2e',
        port: 3000,
        timeout: 10000,
        reuseExistingServer: !process.env.CI,
    },
    workers: 6,
    projects: [
        {
            name: `dev+js`,
            use: {
                javaScriptEnabled: true,
            },
        },
    ],
});
