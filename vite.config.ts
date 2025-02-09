import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from '@tailwindcss/vite';
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactRouter(),
		tailwindcss(),
  ],
	resolve: {
		alias: {
			"@/components": path.resolve(__dirname, "./app/components"),
			"@/hooks": path.resolve(__dirname, "./app/hooks"),
			"@/lib": path.resolve(__dirname, "./app/lib"),
			"@/ui": path.resolve(__dirname, "./app/components/ui"),
		}
	}
});
