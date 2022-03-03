import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { AddSlide } from "../../../components/elements/AddSlide";
import { Loading } from "../../../components/elements/Loading";
import { PreviewMode } from "../../../components/elements/PreviewMode";
import { NavBar } from "../../../components/navigation/NavBar";
import { DownloadPDF } from "../../../components/slides/DownloadPDF";
import { getSlide } from "../../../helpers/getSlide";
import {
  deckQuery,
  deckSlugsQuery,
  clientSlugsQuery,
} from "../../../lib/queries";
import { usePreviewSubscription } from "../../../lib/sanity";
import { sanityClient, getClient } from "../../../lib/sanity.server";

// ---

const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

function moveTo(index) {
  window.fullpage_api.moveTo(index);
}

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

function Deck({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(
    `*[_type == "deck" && slug.current == $deck]`,
    {
      params: data?.queryParams ?? {},
      // The hook will return this on first render
      // This is why it's important to fetch *draft* content server-side!
      initialData: data?.deck,
      // The passed-down preview context determines whether this function does anything
      enabled: preview,
    }
  );

  const [activeIndex, setActiveIndex] = useState(null);

  const router = useRouter();

  const client = {
    title: data?.client?.title,
    slug: data?.client?.slug,
    logo: data?.client?.logo,
  };

  const deck = filterDataToSingleItem(previewData, preview);

  function afterLoad(origin, destination) {
    setActiveIndex(destination);
  }

  function onLeave(destination) {
    setActiveIndex(destination.index);
  }

  useEffect(() => {
    if (activeIndex?.index !== undefined) {
      router.push(`#${activeIndex?.index + 1}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex?.index]);

  return (
    <>
      <Head>
        <title>{deck?.title} | UEFA Dash</title>
      </Head>

      <PreviewMode preview={preview} />

      <NavBar
        returnTo={client.slug}
        slideIndex={{ activeIndex, setActiveIndex }}
        slides={deck?.slides}
        moveTo={moveTo}
      />

      {deck?.slides ? (
        <ReactFullpage
          navigation={false}
          pluginWrapper={pluginWrapper}
          afterLoad={afterLoad.bind(this)}
          onLeave={onLeave.bind(this)}
          scrollOverflow
          loopBottom
          loopTop
          scrollingSpeed={500}
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {deck?.slides?.map((slide, index) => (
                  <div key={slide._key} className="section">
                    {getSlide(
                      slide,
                      index,
                      activeIndex,
                      fullpageApi,
                      deck,
                      client,
                      preview
                    )}
                  </div>
                ))}
                <div className="section">
                  <DownloadPDF />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      ) : preview ? (
        <AddSlide>Add a slide item to get started...</AddSlide>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Deck;

export async function getStaticProps({ params, preview = false }) {
  const queryParams = {
    deck: params.deck,
    client: params.client,
  };

  const { deck, client } = await getClient(preview).fetch(
    deckQuery,
    queryParams
  );

  if (!deck) {
    return { notFound: true };
  }

  return {
    props: {
      preview,
      data: {
        deck,
        client,
        query: deckQuery,
        queryParams,
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
