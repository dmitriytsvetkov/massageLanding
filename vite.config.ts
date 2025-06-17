import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
    return {
        base: '',
        plugins: [],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        build: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `@use "@/styles/all.scss" as *;`,
                    },
                },
                postcss: {
                    plugins: [autoprefixer],
                },
            },
            minify: false,
            cssCodeSplit: false,
            outDir: resolve(__dirname, 'dist'),
            emptyOutDir: true,
            sourcemap: false,
            rollupOptions: {
                output: {
                    entryFileNames: 'scripts/[name].js',
                    chunkFileNames: ({ name }) => {
                        return 'scripts/[name]-[hash].js'
                    },
                    assetFileNames: ({ name }) => {
                        if (/\.css$/.test(name ?? '')) {
                            return 'css/[name][extname]'
                        }

                        if (/\.js$/.test(name ?? '')) {
                            return 'scripts/[name][extname]'
                        }

                        if (/\.(png|jpg|jpeg|gif|svg|webp|avif|ico)$/.test(name ?? '')) {
                            return 'img/[name][extname]'
                        }

                        return 'assets/[name][extname]'
                    },
                },
            },
        },
    }
})
