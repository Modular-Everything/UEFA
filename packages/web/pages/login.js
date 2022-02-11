import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

import { LoginModal } from "../components/elements/LoginModal";
import { Pattern } from "../components/general-patterns/LoginPattern";

export default function Component() {
  const { data: session } = useSession();

  return <LoginModal />;

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );
}
