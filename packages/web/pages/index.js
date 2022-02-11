import Link from "next/link";

import { AllClients } from "../components/screens/AllClients/AllClients";
import { useUserRoles } from "../hooks/useUserRoles";
import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";

// ---

function Home({ allClients }) {
  const { loading, data, status } = useUserRoles();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <h2>Sorry, there was a problem. Please refresh the page.</h2>;
  }

  if (status === "authenticated" && data?.isSuperUser) {
    return (
      <>
        <h2>
          Superuser? {data.isSuperUser ? "✅" : "❌"} &mdash; {data.identity}
        </h2>
        <AllClients clients={allClients} />
      </>
    );
  }

  if (status === "authenticated" && !data?.isSuperUser) {
    return (
      <>
        <h2>
          Superuser? {data.isSuperUser ? "✅" : "❌"} &mdash; {data.identity}
        </h2>
        <p>Sorry you can't access this page.</p>
      </>
    );
  }

  return (
    <Link href="/api/auth/signin">
      <a>Sign in</a>
    </Link>
  );
}

export default Home;

export async function getStaticProps({ preview = false }) {
  const allClients = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allClients, preview },
  };
}
