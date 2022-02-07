import Head from "next/head";
import Link from "next/link";

import { clientQuery, clientSlugsQuery } from "../../../lib/queries";
import { sanityClient, getClient } from "../../../lib/sanity.server";

// ---

function Client({ data }) {
  console.info(data);

  const client = {
    title: data?.client?.title,
    slug: data?.client?.slug,
    decks: data?.client?.decks,
  };

  return (
    <div>
      <Head>
        <title>{client.title} | UEFA Dash</title>
      </Head>

      <h1>{client.title}</h1>

      <ul>
        {client?.decks?.map((deck) => (
          <li key={deck._id}>
            <Link href={`/clients/${client.slug}/${deck.slug.current}`}>
              <a>{deck.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Client;

export async function getStaticProps({ params, preview = false }) {
  const { client } = await getClient(preview).fetch(clientQuery, {
    client: params.client,
  });

  if (!client) {
    return { notFound: true };
  }

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
