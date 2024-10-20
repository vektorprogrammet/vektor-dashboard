import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "pages/index.tsx", { index: true });
          route("/dashboard", "pages/layout.tsx", () => {
            route("", "pages/home.tsx", { index: true });
          });
          // auth
          route("/sign-in", "pages/auth/sign-in.tsx", { index: true });
          route("/sign-up", "pages/auth/sign-up.tsx", { index: true });
          route("/profile", "pages/auth/profile.tsx", { index: true });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
