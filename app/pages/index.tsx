import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import type { MetaFunction, LoaderFunction } from "react-router";
import { redirect } from "react-router";
import { Link } from "react-router";

/* export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
}; */
export const loader: LoaderFunction = async () => {
  return redirect("/dashboard");
};

export const meta: MetaFunction = () => {
  return [
    { title: "Vektor Dashboard" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="h-dvh grid place-items-center">
      <Button variant={"default"} role="link">
        <Link to={"/dashboard"}>Log in</Link>
      </Button>
    </main>
  );
}
