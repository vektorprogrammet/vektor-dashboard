import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <main className="grid place-items-center">
      <h1>Sign Up route</h1>
      <SignUp />
    </main>
  );
}
