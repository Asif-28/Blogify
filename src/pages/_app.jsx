
import Loader from "@/comp/Loader";
import Footer from "@/comp/header-footer/Footer";
import Header from "@/comp/header-footer/Header";
import "@/styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Router } from "next/router";
import { useState } from "react";

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
    <>
      <SessionProvider session={session}>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
        <Footer />
      </SessionProvider>
    </>
    // <>
    //   <SessionProvider session={session}>
    //     <Header />
    //     <Component {...pageProps} />
    //     <Footer />
    //   </SessionProvider>
    // </>
  );
}
