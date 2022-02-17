import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Loading } from "../../components/elements/Loading";

// ---

function Clients() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <Link href="/">
      <a>
        <Loading />
      </a>
    </Link>
  );
}

export default Clients;
