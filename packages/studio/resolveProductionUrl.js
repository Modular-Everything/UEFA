const previewSecret = "2309dm9os";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://uefa-dash.netlify.app`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  // console.log("doc", doc);

  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

  return previewUrl.toString();
}
