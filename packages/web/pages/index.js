import { Loading } from "../components/elements/Loading";
import { AllClients } from "../components/screens/AllClients/AllClients";
import { Login } from "../components/screens/Login";
import { useUserRoles } from "../hooks/useUserRoles";
import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";

// ---

function Home({ allClients }) {
  const { loading, data, status } = useUserRoles();

  if (loading || (!data && status !== "unauthenticated")) {
    return <Loading />;
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
    return <Login status={status} denyAccess />;
  }

  return <Login status={status} />;
}

export default Home;

export async function getStaticProps({ preview = false }) {
  const allClients = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allClients, preview },
  };
}
