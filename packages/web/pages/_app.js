import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

import "../styles/initialize.css";
import "../styles/globals.css";

const sanityClient = require("@sanity/client");

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "users"]';

    const client = sanityClient({
      projectId: "vua524it",
      dataset: "production",
      apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
      token:
        "sksXSfjIaC7BysLRgWpZDZz9H3SmNerduSdsK1KVNjPHZTu3vLPbEE1O0nDCHXPf14inM4CyR8TB1lfWO2rireJUpnl08EwpXsD3GHE1oLlSoyz475lYvUkF588IjUEgagGVI6Zje1WYUBJfwKTABurn0vJlRmd4tc8UkCrhIJUlJELZywBq", // or leave blank for unauthenticated usage
      useCdn: false, // `false` if you want to ensure fresh data
    });

    // client.fetch(query, {}).then((data) => {
    //   console.log(data);
    // });

    setLoading(true);

    async function getUserData() {
      const res = await client.fetch(query, {});
      setData(res);
      setLoading(false);
    }

    getUserData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No profile data</p>;
  }

  console.log(session);

  return (
    <SessionProvider session={session}>
      <h1>{data[0].email}</h1>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
