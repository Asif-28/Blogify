import Head from "next/head";
import Hero from "@/comp/hero/Hero";
import BlogCards from "@/comp/blogCards/BlogCards";
import AboutComp from "@/comp/about/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogify</title>
        <meta name="description" content="Blogify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <BlogCards />
        <AboutComp />
      </main>
    </>
  );
}
