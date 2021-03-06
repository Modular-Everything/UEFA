import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";

import * as S from "./AllClients.styles";

export function AllClients({ clients }) {
  return (
    <S.AllClients>
      <Head>
        <title>All Clients | UEFA Dash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            Client name:{" "}
            <Link href={`/clients/${client.slug}`}>
              <a>{client.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </S.AllClients>
  );
}

AllClients.propTypes = {
  clients: PropTypes.array.isRequired,
};
