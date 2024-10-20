import { SignUp } from "@clerk/remix";
import { Center } from "@mantine/core";

export default function SignUpPage() {
  return (
    <div>
      <Center>
        <h1>Sign Up route</h1>
        <SignUp />
      </Center>
    </div>
  );
}
