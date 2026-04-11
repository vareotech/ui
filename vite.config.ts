import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      insertTypesEntry: true,
      include: [
        'src/index.ts',
        'src/components/**/*.ts',
        'src/components/**/*.tsx',
        'src/lib/**/*.ts',
        'src/tokens/**/*.ts',
      ],
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.stories.ts',
        'src/**/*.test.tsx',
        'src/**/*.test.ts',
        'src/stories/**',
        'src/templates/**',
        'src/App.tsx',
        'src/main.tsx',
        'src/vite-env.d.ts',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    /* Ensure the output CSS file is named ui.css */
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VareoUI',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    cssFileName: 'ui',
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
})
