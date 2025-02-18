import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Enable the development server
  server: {
    port: 3000,
  },
  // Enable the static file server
  build: {
    // Use the `build` option to enable the static file server
    // We will use the `serve` option to enable the development server
    serve: {
      // Enable the development server
      enable: true,
      // Use the `http` option to enable the development server
      http: {
        // Enable the development server
        enable: true,
        // Use the `https` option to enable the development server
        https: {
          // Enable the development server
          enable: true,
        },
      },
    },
  },
  plugins: [
    // Enable the GitHub Pages plugin
    {
      resolve: '@vite/generate',
      options: {
        // Use the `build` option to enable the GitHub Pages plugin
        build: {
          // Use the `serve` option to enable the development server
          serve: {
            // Enable the development server
            enable: true,
            // Use the `http` option to enable the development server
            http: {
              // Enable the development server
              enable: true,
              // Use the `https` option to enable the development server
              https: {
                // Enable the development server
                enable: true,
              },
            },
          },
        },
      },
    },
  ],
}));
