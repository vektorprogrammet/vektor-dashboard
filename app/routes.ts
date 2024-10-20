import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export const routes: RouteConfig = [
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
];
