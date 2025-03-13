import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

// biome-ignore lint/style/noDefaultExport: React Router 7 RouteConfig requires default export https://reactrouter.com/start/framework/routing
export default [
  // renders into the root.tsx Outlet at /
  index("./pages/index.tsx"),
  ...prefix("/dashboard", [
    layout("./pages/layout.tsx", [
      // renders into the dashboard.tsx Outlet at /dashboard
      index("./pages/home.tsx"),
      route("/intervjufordeling", "./pages/sokere.tsx"),
      route("/profile", "./pages/profile.tsx"),
      route("/profile/rediger", "./pages/rediger-profil.tsx"),
    ]),
  ]),

  // auth
  // route("/sign-in", "./pages/auth/sign-in.tsx", { index: true }),
  // route("/sign-up", "./pages/auth/sign-up.tsx", { index: true }),
] satisfies RouteConfig;
