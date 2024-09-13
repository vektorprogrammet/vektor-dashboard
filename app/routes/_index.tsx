import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export default function Index() {
  return (
    <>
      <main className="h-dvh">
        <Button>Hello world</Button>
      </main>
    </>
  );
}
