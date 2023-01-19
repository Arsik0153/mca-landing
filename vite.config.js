// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                account: resolve(__dirname, "account/index.html"),
                addresses: resolve(__dirname, "addresses/index.html"),
                details: resolve(__dirname, "details/index.html"),
                sign: resolve(__dirname, "sign/index.html"),
            },
        },
    },
});
