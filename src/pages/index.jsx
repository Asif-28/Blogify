import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Hero from "@/comp/Hero";
import BlogCards from "@/comp/blogCards/BlogCards";
import Footer from "@/comp/Footer";
import BloggerPosts from "@/comp/blogCards/ApiData";
import SliderImg from "@/comp/SliderImg";

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
        <BloggerPosts />
        <Footer />
      </main>
    </>
  );
}
