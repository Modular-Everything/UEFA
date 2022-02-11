import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { sanityConfig } from "../lib/config";

const sanityClient = require("@sanity/client");

export function useUserRoles() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    const client = sanityClient(sanityConfig);
    const query = `
      *[_type == "users" && email == $email][0] {
        accessRoles->,
        ...
      }
    `;
    const params = {
      email: session === undefined || !session ? "" : session.user.email,
    };

    async function getUserData() {
      const res = await client.fetch(query, params);
      setData(res);
      setLoading(false);
    }

    getUserData();
  }, [session]);

  return {
    loading: isLoading,
    data: data
      ? {
          allUserData: data,
          isSuperUser: data?.superuser,
          identity: data?.email,
          access: data?.accessRoles,
        }
      : null,
    session,
    status,
  };
}
