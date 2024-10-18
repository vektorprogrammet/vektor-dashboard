import { SignIn } from "@clerk/remix";
import { Center } from "@mantine/core";

export default function SignInPage() {
  return (
    <>
      <Center>
        <h1>Sign In</h1>
        <SignIn />
      </Center>
    </>
  );
}
