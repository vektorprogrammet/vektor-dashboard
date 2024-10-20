import { Button } from "@/components/ui/button";
import type { LoaderFunction, MetaFunction } from "react-router";
import { Link, redirect } from "react-router";

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
