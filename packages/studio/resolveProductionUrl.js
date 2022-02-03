// eslint-disable-next-line import/no-unresolved
import sanityClient from "part:@sanity/base/client";

const previewSecret = "2309dm9os";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://uefa-dash.netlify.app`;
const localUrl = `http://localhost:3000`;

const client = sanityClient.withConfig({
  apiVersion: "2021-11-19",
});

export default async function resolveProductionUrl(doc) {
  const parentSlug = await client.fetch(
    `*[_type == "client" && references($deckId)][0].slug.current`,
    { deckId: doc._id }
  );

  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);
  previewUrl.searchParams.append(`parentSlug`, `${parentSlug}/` ?? "");

  return previewUrl.toString();
}
