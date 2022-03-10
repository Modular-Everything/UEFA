import { useKeenSlider } from "keen-slider/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";

import { AddSlide } from "../../../components/elements/AddSlide";
import { Loading } from "../../../components/elements/Loading";
import { PreviewMode } from "../../../components/elements/PreviewMode";
import { BackButton } from "../../../components/navigation/BackButton";
import { NavBar } from "../../../components/navigation/NavBar";
import { DownloadPDF } from "../../../components/slides/DownloadPDF";
import { getSlide } from "../../../helpers/getSlide";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  deckQuery,
  deckSlugsQuery,
  clientSlugsQuery,
} from "../../../lib/queries";
import { usePreviewSubscription } from "../../../lib/sanity";
import { sanityClient, getClient } from "../../../lib/sanity.server";

// ---

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

  const router = useRouter();
  const { height: windowHeight } = useWindowSize();

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [hasChanged, setHasChanged] = useState(false);
  const [isSpain, setSpain] = useState(false);
  const [viaSpainLink, setViaSpainLink] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    breakpoints: {
      "(max-width: 770px)": {
        mode: "free",
      },
    },
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    vertical: true,
    created(slide) {
      if (!hasChanged) {
        const matchedSlide = Number(
          router.asPath.match(/#([a-z0-9]+)/giu)[0].replace("#", "")
        );
        slide.moveToIdx(matchedSlide - 1);
      }
    },
    slideChanged(slide) {
      setHasChanged(true);
      setActiveIndex(slide.track.details.abs);

      function isSpain(slideNumber) {
        return slide?.slides[slideNumber]?.children[0].className.includes(
          "Spain"
        );
      }

      const velocity = Math.sign(slide.track.velocity());

      if (isSpain(slide.track.details.abs)) {
        setSpain(true);
      } else {
        setSpain(false);
      }

      if (velocity > 0) {
        if (isSpain(slide.track.details.abs - 1)) {
          setPrevSlide(slide.track.details.abs - 1);
        }
      } else {
        if (isSpain(slide.track.details.abs + 1)) {
          setPrevSlide(slide.track.details.abs + 1);
        }
      }
    },
  });

  useEffect(() => {
    if (activeIndex !== undefined) {
      router.push(`#${activeIndex + 1}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        instanceRef?.current?.prev();
      }
      if (e.key === "ArrowDown") {
        instanceRef?.current?.next();
      }
    });
  }, [instanceRef]);

  const client = {
    title: data?.client?.title,
    slug: data?.client?.slug,
    logo: data?.client?.logo,
  };

  const deck = filterDataToSingleItem(previewData, preview);

  return (
    <>
      <Head>
        <title>{deck?.title} | UEFA Dash</title>
      </Head>

      <PreviewMode preview={preview} />

      <NavBar
        returnTo={client.slug}
        slides={deck?.slides}
        instanceRef={instanceRef}
      />

      {!isSpain && viaSpainLink && instanceRef && prevSlide && (
        <BackButton
          instanceRef={instanceRef}
          moveTo={prevSlide}
          setViaSpainLink={setViaSpainLink}
        />
      )}

      {deck?.slides ? (
        <div
          className="slides keen-slider"
          ref={sliderRef}
          style={{ height: windowHeight }}
        >
          {deck?.slides?.map((slide, index) => (
            <div
              key={slide._key}
              className={`section keen-slider__slide slide${index + 1} ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {getSlide(
                slide,
                index,
                activeIndex,
                setViaSpainLink,
                instanceRef,
                deck,
                client,
                preview
              )}
            </div>
          ))}

          <div className="section keen-slider__slide">
            <DownloadPDF />
          </div>
        </div>
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
