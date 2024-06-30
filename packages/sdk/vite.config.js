// @ts-check
/**
 * Vite just generate the bundle, Type declarations are generated by *tsc*,
 * see "build" script in package.json
 */
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  return {
    clearScreen: false,
    plugins: [
      tsconfigPaths(),
      dts({
        rollupTypes: true,
        compilerOptions: {
          declarationMap: true,
        },
      }),
      visualizer({ filename: "stats.html", emitFile: true }),
    ],
    resolve: {
      preserveSymlinks: true,
    },

    build: {
      sourcemap: true,
      lib: {
        entry: {
          attributes: resolve(__dirname, "src/attributes.ts"),
          "web-components": resolve(__dirname, "src/web-components/index.ts"),
          "client-render": resolve(__dirname, "src/client-render.ts"),
          context: resolve(__dirname, "src/context.ts"),
          datasources: resolve(__dirname, "src/datasources.ts"),
          "dynamic-css": resolve(__dirname, "src/dynamic-css.ts"),
          sdk: resolve(__dirname, "src/sdk.ts"),
          zod: resolve(__dirname, "src/zod.ts"),
          settings: resolve(__dirname, "src/settings.ts"),
        },
        formats: ["es"],
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["zod", "tailwindcss", "lit"],
        output: {
          // Provide global variables to use in the UMD build
          globals: {
            zod: "zod",
            tailwindcss: "tailwindcss",
          },
        },
      },
    },
  };
});
