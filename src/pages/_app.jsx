import Header from "@/comp/Header";
import Loader from "@/comp/Loader";
import "@/styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Router } from "next/router";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  });

  return (
    // <>
    //   <SessionProvider session={session}>
    //     <Header />
    //     {loading ? (
    //       <Loader />
    //     ) : (
    //       <>
    //         <Component {...pageProps} />
    //       </>
    //     )}
    //   </SessionProvider>
    // </>
    <>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
