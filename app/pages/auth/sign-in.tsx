import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <main className="grid place-items-center">
      <h1>Sign In</h1>
      <SignIn />
    </main>
  );
}
