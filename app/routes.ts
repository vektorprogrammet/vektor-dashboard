import {
  type RouteConfig,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  // renders into the root.tsx Outlet at /
  index("./pages/index.tsx"),
  ...prefix("/dashboard", [
    layout("./pages/layout.tsx", [
      // renders into the dashboard.tsx Outlet at /dashboard
      index("./pages/home.tsx"),
    ]),
  ]),

  // auth
  // route("/sign-in", "./pages/auth/sign-in.tsx", { index: true }),
  // route("/sign-up", "./pages/auth/sign-up.tsx", { index: true }),
] satisfies RouteConfig;
