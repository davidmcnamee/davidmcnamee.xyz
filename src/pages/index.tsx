import Head from "next/head";
import { Hero } from "../components/hero";
import { Sidebar } from "../components/sidebar";
import { BackgroundWord, Spacer } from "../components/background-word";
import { Card, CardProps } from "../components/card";
import { useRef, useState, Fragment, useEffect } from "react";
import { Footer } from "../components/footer";
import { WhiteArrows } from "../components/white-arrows";

export default function Home() {
  const [cardRefs] = useState(
    content.map((c) => ({
      ref: useRef<HTMLDivElement>(null as any),
      title: c.title,
    }))
  );
  return (
    <>
      <Head>
        <title>David McNamee</title>
      </Head>
      <Sidebar />
      <main>
        <Hero />
        <BackgroundWord cardRefs={cardRefs} />
        <WhiteArrows />
        {content.map((c, idx) => (
          <Fragment key={idx}>
            <Spacer />
            <Card
              ref={cardRefs[idx].ref}
              img={c.img}
              background={colourWheel[idx % colourWheel.length]}
              imgLeft={!(idx % 2)}
            >
              {c.children}
            </Card>
          </Fragment>
        ))}
        <Spacer />
      </main>
      <Footer />
    </>
  );
}

const colourWheel = [
  "linear-gradient(120deg, #f12711, #f5af19)",
  "linear-gradient(120deg, #fc466b, #3f5efb)",
  "linear-gradient(120deg, #23074d, #cc5333)",
  "linear-gradient(120deg, #000000, #0f9b0f)",
  "linear-gradient(120deg, #2193b0, #6dd5ed)",
];

const content: (Pick<CardProps, "img" | "children"> & { title: string })[] = [
  {
    title: "Web",
    children: (
      <>
        <h2>Peruse</h2>
        <p>
          I recently published a chrome extension that lets you follow your
          favorite clothing brands.{" "}
          <a href="https://chrome.google.com/webstore/detail/peruse/fajccaeldgbiaigahbfpalgnbapjjmhp">
            Download it on the chrome web store.
          </a>{" "}
          This project involved production-grade web scraping with puppeteer and
          serverless functions as a cheap way to bootstrap a scalable backend
          server.
          <br />
          <br />
          Currently this only works for Aritzia, but I'm working on expanding to
          more stores.
        </p>
      </>
    ),
    img: "/static/peruse-1.jpg",
  },
  {
    title: "Full Stack",
    children: (
      <>
        <h2>
          Canada United &nbsp;{" "}
          <img
            src="/static/canada-united-logo.png"
            style={{
              display: "inline-block",
              height: "0.8em",
            }}
          />
        </h2>
        <p>
          Working at{" "}
          <a href="https://lazertechnologies.com/">Lazer Technologies</a>, I got
          the opportunity to work with RBC's engineering team to create Canada
          United – a platform for Canadians to support local businesses near
          them. I learned a lot about SSR during this project; take a look at{" "}
          <a href="https://lazertechnologies.com/blog/how-to-add-localization-to-your-nextjs-app">
            this article I wrote
          </a>{" "}
          regarding SSR and localization in Next.js.
        </p>
      </>
    ),
    img: "/static/canada-united-1.png",
  },
  {
    title: "Mobile",
    children: (
      <>
        <h2>Ingredient Simplifier</h2>
        <p>
          As a project lead at Coffee N' Code last year, I got to teach beginner
          React Native to a group of ~60 undergrad students @UWaterloo! The app
          was fairly straightforward – it took a picture of the ingredients on a
          food label and spit out a list of easy-to-understand ingredients which
          ommitted all funny-sounding chemical names. Take a look at the{" "}
          <a href="https://github.com/davidmcnamee/ingredient-simplifier">
            source on github!
          </a>
        </p>
      </>
    ),
    img: "static/ingredient-simplifier-1.png",
  },
  {
    title: "Finance",
    children: (
      <>
        <h2>McGill International Portfolio Challenge 2019</h2>
        <p>
          My and my team were incredibly surprised and humbled when we were
          invited to the Montreal finals for the MIPC! The case revolved around
          a fictional Newfoundland pension fund that wanted to divest its $2B
          shares in the oil industry. Althought Team Laurier didn't win, our top
          25 of 108 finish was more than what we expected for our first buy-side
          finance competition.
        </p>
      </>
    ),
    img: "static/mipc-2.jpg",
  },
];
