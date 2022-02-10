import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";

// ---

function Home({ allClients }) {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>All Clients | UEFA Dash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {status === "authenticated" ? (
        <>
          <h2>You're logged in as {session.user.email}</h2>
          <ul>
            {allClients.map((client) => (
              <li key={client._id}>
                Client name:{" "}
                <Link href={`/clients/${client.slug}`}>
                  <a>{client.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <a href="/api/auth/signin">Sign in</a>
      )}
    </div>
  );
}

export default Home;

export async function getStaticProps({ preview = false }) {
  const allClients = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allClients, preview },
  };
}
