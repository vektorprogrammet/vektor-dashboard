import { AppShell, Center } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center mih="100dvh">
      <Link to={"/dashboard"}>Dashboard</Link>
    </Center>
  );
}
