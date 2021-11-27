import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import React from "react";

import { Italy } from "../../../components/slides";
import {
  deckQuery,
  deckSlugsQuery,
  clientSlugsQuery,
} from "../../../lib/queries";
import { sanityClient, getClient } from "../../../lib/sanity.server";

// ---

const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

function Client({ data }) {
  const client = {
    title: data?.client?.title,
  };

  const deck = {
    title: data?.deck?.title,
    slides: data?.deck?.slides,
  };

  function getSlide(slide) {
    const id = slide._type;
    const slides = {
      italy: <Italy />,
    };
    return slides[id] && React.createElement(slides[id].type, { data: slide });
  }

  console.log("deck", deck);

  function onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
  }

  return (
    <div>
      <Head>
        <title>{deck.title} | UEFA Dash</title>
      </Head>

      <ReactFullpage
        navigation={false}
        pluginWrapper={pluginWrapper}
        onLeave={onLeave.bind(this)}
        // scrollHorizontally = {true}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {deck.slides.map((slide) => (
              <div key={slide._key} className="section">
                {getSlide(slide)}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default Client;

export async function getStaticProps({ params, preview = false }) {
  const { deck, client } = await getClient(preview).fetch(deckQuery, {
    deck: params.deck,
    client: params.client,
  });

  if (!client || !deck) {
    return { notFound: true };
  }

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
