import LogRocket from "logrocket";
import { SessionProvider } from "next-auth/react";
import "../styles/initialize.css";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Script id="logrocket">
        {typeof window !== "undefined" &&
          process.env.NODE_ENV !== "development" &&
          LogRocket.init("rpltij/uefa")}
      </Script>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
