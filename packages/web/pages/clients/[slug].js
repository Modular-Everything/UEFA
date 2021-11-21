import Head from "next/head";

import { clientQuery, clientSlugsQuery } from "../../lib/queries";
import { sanityClient, getClient } from "../../lib/sanity.server";

// ---

function Client({ data }) {
  console.log(data);

  const client = {
    name: data?.client?.clientName,
  };

  return (
    <div>
      <Head>
        <title>{client.name} | UEFA Dash</title>
      </Head>

      <h1>{client.name}</h1>
    </div>
  );
}

export default Client;

export async function getStaticProps({ params, preview = false }) {
  const { client } = await getClient(preview).fetch(clientQuery, {
    slug: params.slug,
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
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
