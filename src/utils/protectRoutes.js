import { getSession } from "next-auth/react";
import React from "react";

const requireAuthentication = async (context, callback) => {
  const session = await getSession(context);

  //   console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "./login",
        permanent: false,
      },
    };
  }
  return callback();
};

export default requireAuthentication;
