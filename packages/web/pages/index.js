import Head from "next/head";
import Link from "next/link";

import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";

// ---

const Home = ({ allClients }) => {
  console.log(allClients);

  return (
    <div>
      <Head>
        <title>All Clients | UEFA Dash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {allClients.map((client) => (
          <li>
            Client name:{" "}
            <Link href={`/clients/${client.slug}`}>
              <a>{client.clientName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export async function getStaticProps({ preview = false }) {
  const allClients = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allClients, preview },
  };
}
