import Head from "next/head";
import Link from "next/link";

import {
  deckQuery,
  deckSlugsQuery,
  clientSlugsQuery,
} from "../../../lib/queries";
import { sanityClient, getClient } from "../../../lib/sanity.server";

// ---

function Client({ data }) {
  console.info(data);

  const client = {
    title: data?.client?.title,
  };

  const deck = {
    slides: data?.deck?.slides,
  };

  return (
    <div>
      <Head>
        <title>| UEFA Dash</title>
      </Head>

      <h6>
        <Link href="/">
          <a>&larr; Back</a>
        </Link>
      </h6>
      <h1>{client.title}</h1>

      <ul>
        {deck.slides.map((slide) => (
          <li key={slide} style={{ color: `#${slide}` }}>
            {slide}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Client;

export async function getStaticProps({ params, preview = false }) {
  const { deck, client } = await getClient(preview).fetch(deckQuery, {
    deck: params.deck,
    client: params.client,
  });

  return {
    props: {
      preview,
      data: {
        deck,
        client,
      },
    },
  };
}

export async function getStaticPaths() {
  const deckPaths = await sanityClient.fetch(deckSlugsQuery);
  const clientPaths = await sanityClient.fetch(clientSlugsQuery);

  const paths = clientPaths.flatMap((client) =>
    deckPaths.map((deck) => ({
      params: {
        client,
        deck,
      },
    }))
  );

  return {
    paths,
    fallback: true,
  };
}
