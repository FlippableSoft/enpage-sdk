/**
 * Vite just generate the bundle, Type declarations are generated by *tsc*,
 * see "build" script in package.json
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react() /*, vanillaExtractPlugin()*/],
});
