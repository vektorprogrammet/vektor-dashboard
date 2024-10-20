import { Center } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { type LoaderFunction, redirect } from "@remix-run/node";

/* export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
}; */

export const meta: MetaFunction = () => {
  return [
    { title: "Vektor Dashboard" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center mih="100dvh">
      <h1>Index route</h1>
      <UserButton />
      <Link to={"/dashboard"}>Dashboard</Link>
    </Center>
  );
}
