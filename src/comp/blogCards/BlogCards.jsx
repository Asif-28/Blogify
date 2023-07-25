import React, { useState } from "react";
import BlogCard from "./BlogCard";
const data = [
  {
    id: 1,
    img: "https://miro.medium.com/v2/resize:fit:828/0*1PMVTcIlaxh4kA_X",
    title: "Top 5 mobile apps which nobody knows about…”",
    desc: " In the vast ocean of mobile applications, some remarkable gems often go unnoticed. While popular apps dominate the headlines, there are numerous lesser-known apps that offer unique features, creative solutions, and a refreshing experience. In this article, we’ll unveil 20 remarkable mobile apps that have flown under the radar but are worth exploring. From productivity tools to innovative entertainment options, let’s discover these hidden gems!“Journo” — Your Personal Journal . “Momento” — Digital Memory Box. “Wolfram Alpha” — Computational Knowledge Engine. “Slowly” — Pen-Pal App for the Digital Age.“Streaks” — Build Healthy Habits",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",
    author: "Anonymous",
    date: "25 July 2023",
  },
  {
    id: 2,
    img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Xzv2yE1U41x5qA9j_4M63w.jpeg",
    title: "Interesting Web Technologies to follow",
    desc: "The world of web development is constantly changing and it is a challenge to keep a close eye on everything that is going on . Which framework will still be relevant in the coming year ?",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",
    author: "Anonymous",
    date: "25 July 2023",
  },
  {
    id: 3,
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*1TBfzi427uzYvE2mJXoXrw.png",
    title: "5 Ways I’m Using AI to Make Money in 2023",
    desc: "These doubled my income last year - I've been using Ai tools to help grow my own-woman business foe the past year. Honestly , it's been a game-changer.For example, with the help of AI, i was able to Double the income.",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Anonymous",
    date: "25 July 2023",
  },
  {
    id: 4,
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*aY1O4OUHnOqCDESI.png",
    title: "We Analyzed 1,626 Banned Books…Here’s What We Found",
    desc: "The non-profits PEN America and the American Library Association keep a catalog of banned books in the United States up to the 2021–22 academic year. In this 1 academic year alone, 1600+ books were irregularly banned from school districts across America. Irregular bans tend to be ideologically driven. They are supplemental to and fall outside of the standard book exclusion process (e.g. standard exclusions prevent books that promote violent, hateful, or “mature/17+” topics from being placed on school bookshelves). Below, we’ve provided a sample of irregularly banned books in 2021–22 ",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Anonymous",
    date: "25 July 2023",
  },
  {
    id: 5,
    img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*59GQ9Pj_rP-1QsYTKr_lKg.jpeg",
    title: "Stoicism: The best mind-hack to change your life (It changed mine)",
    desc: "Have you been in a tough spot in your life? Do you want things around you to change but you’re not sure which foot to put forward? Do you think it is high time to give a different lifestyle a try? Stoicism can be just what you are looking for. Don’t worry this is not a type of living that will require you to build a camp in woods, or tell you to through away all your technology to live a happy life. In fact, according to me — these things are near to impossible seeing the current world scenario. One needs technology and a good lifestyle to live a good life now-a-days. That’s why any new idea about trying to become more minimal and responsible should include this fact. To put a more realistic definition of Stoicism, to me it is about accepting reality, putting ones ‘need’ above ‘want’ and become more accepting. It is a philosophy of life that aims to minimise the negative aspects in your life and make an individual more opportunistic ",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Anonymous",
    date: "25 July 2023",
  },
  {
    id: 6,
    img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*jndUvg_fxqdu-xdK0ejhtw.jpeg",
    title: "How to get ahead of 99% of people",
    desc: "I could not have thought of a more obvious title but read till the end and you’ll know I mean it. Not because I am a philosophy expert but because this is something that I been preaching for the past 8 months and this head led me from making 0$ to 1000$ . You can search “How do I grow mentally?” or “How to become unrecognisable in months” but most of the times you’ll find generic answers.Become more disciplined.Make targeted goals and follow them .Go into a monk mode and give up desires.Wake up early, exercise and be focused",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Anonymous",
    date: "25 July 2023",
  },
];
const BlogCards = () => {
  return (
    <div className="container max-w-[1300px] mx-auto">
      <h2 className="text-[2.5rem] text-center py-2 mt-7">Trending</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1 ">
        {data.map((item) => {
          return (
            <BlogCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              authImg={item.authImg}
              author={item.author}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogCards;
