import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['app/assets/css/app.css', 'app/assets/js/app.js'],
            refresh: true,
        }),
    ],
});
