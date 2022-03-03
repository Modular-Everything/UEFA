import Error from "next/error";

import { Loading } from "../../../components/elements/Loading";
import { ClientArea } from "../../../components/screens/ClientArea";
import { Login } from "../../../components/screens/Login";
import { useUserRoles } from "../../../hooks/useUserRoles";
import { clientQuery, clientSlugsQuery } from "../../../lib/queries";
import { sanityClient, getClient } from "../../../lib/sanity.server";

// ---

function Client({ data, preview }) {
  const { loading, data: loadingData, status } = useUserRoles();

  if (loading || (!loadingData && status !== "unauthenticated")) {
    return <Loading />;
  }

  if (!data?.client) {
    return <Error statusCode={404} />;
  }

  if (preview || (status === "authenticated" && loadingData?.isSuperUser)) {
    const client = {
      title: data?.client?.title,
      logo: data?.client?.logo,
      slug: data?.client?.slug,
      decks: data?.client?.decks,
    };

    return <ClientArea data={client} />;
  }

  if (status === "authenticated" && !loadingData?.isSuperUser) {
    return <Login status={status} denyAccess />;
  }

  return <Login status={status} />;
}

export default Client;

export async function getStaticProps({ params, preview = false }) {
  const { client } = await getClient(preview).fetch(clientQuery, {
    client: params.client,
  });

  return {
    props: {
      preview,
      data: {
        client,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(clientSlugsQuery);
  return {
    paths: paths.map((client) => ({ params: { client } })),
    fallback: true,
  };
}
