import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { playwright } from '@vitest/browser-playwright'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
              storybookScript: 'npm run storybook -- --ci --no-open',
              storybookUrl: 'http://127.0.0.1:6006',
            }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              provider: playwright(),
              headless: true,
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['./.storybook/vitest.setup.ts'],
            coverage: {
              provider: 'v8',
              reportsDirectory: './coverage/storybook',
              reporter: ['text', 'html'],
              watermarks: {
                statements: [60, 85],
                functions: [60, 85],
                branches: [50, 75],
                lines: [60, 85],
              },
            },
          },
        },
      ],
    },
  }),
)
