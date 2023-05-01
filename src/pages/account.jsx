import React from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { fetchData } from "next-auth/client/_utils";

const Account = (props) => {
  const { message } = props.res;
  // console.log(props)
  // console.log(message)
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <p>Welcome {session.user.name}</p>
        <img src={message} alt="dog-image" />
        <button onClick={() => signOut()}> SignOut</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in </p>
      </div>
    );
  }
};

export default Account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  const res = await data.json();
  // console.log(res)
  if (!session) {
    return {
      redirect: {
        destination: "./login",
      },
    };
  }
  return {
    props: { session, res },
  };
};
