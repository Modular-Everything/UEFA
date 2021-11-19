import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("testing");
  return <Component {...pageProps} />;
}

export default MyApp;
