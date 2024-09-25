import { Link, Outlet } from "@remix-run/react";
import { ActionToggle } from "./ActionToggle";

const routes = [
  { name: "Home", path: "/home" },
  { name: "Brukere", path: "/users" },
  { name: "Assistenter", path: "/assistants" },
  { name: "Opptak", path: "/admission" },
  { name: "Statistikk", path: "/statistics" },
  { name: "Skoler", path: "/schools" },
  { name: "Teams", path: "/teams" },
  { name: "Interesse", path: "/interest" },
];

export default function Layout() {
  return (
    <>
      <header className="flex justify-between">
        <nav>
          {routes.map((route) => (
            <Link key={route.path} to={`/dashboard${route.path}`}>
              {route.name}
            </Link>
          ))}
        </nav>
        <ActionToggle />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
