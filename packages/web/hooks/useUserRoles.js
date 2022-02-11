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
    const query = '*[_type == "users" && email == $email]';
    const params = {
      email: session === undefined ? "" : session.user.email,
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
          allUserData: data[0],
          isSuperUser: data[0]?.superuser,
          identity: data[0]?.email,
          access: data[0]?.accessRoles,
        }
      : null,
    session,
    status,
  };
}
