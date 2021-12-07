import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";
import Head from "next/head";
import { useEffect, useState } from "react";

import { getSlide } from "../../../helpers/getSlide";
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
  console.log("deck", deck);

  /**
   * Handle animations
   * Can this be passed off to another component?
   */
  const [tl, setTl] = useState(() =>
    gsap.timeline({
      paused: true,
    })
  );
  useEffect(() => {
    tl.seek(1);
    console.log(tl);
  }, []);
  /**
   * End animations
   */

  function onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
  }

  return (
    <>
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
                {getSlide(slide, tl)}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </>
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
