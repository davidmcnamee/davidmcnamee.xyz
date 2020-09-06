import Head from "next/head";
import { Hero } from "../components/hero";
import { Sidebar } from "../components/sidebar";
import { BackgroundWord, Spacer } from "../components/background-word";
import { Card, CardProps } from "../components/card";
import { useRef, useState, Fragment } from "react";
import { Footer } from "../components/footer";

export default function Home() {
  const [cardRefs] = useState(
    content.map((c) => ({ ref: useRef(), title: c.title }))
  );
  return (
    <>
      <Head>
        <title>David McNamee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main>
        <Hero />
        <BackgroundWord cardRefs={cardRefs} />
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
    children: <p>hello</p>,
    img:
      "https://lh3.googleusercontent.com/-dx_PAM3P4bfKmt1RTp2jmyt3Dy72FgbjAXKIwcyghwAQNyB5pzyyHLwpXnTC7r3E9fL_Xlc9w=w640-h400-e365-rj-sc0x00ffffff",
  },
  {
    title: "Full Stack",
    children: <p>hello</p>,
    img:
      "https://lh3.googleusercontent.com/-dx_PAM3P4bfKmt1RTp2jmyt3Dy72FgbjAXKIwcyghwAQNyB5pzyyHLwpXnTC7r3E9fL_Xlc9w=w640-h400-e365-rj-sc0x00ffffff",
  },
  {
    title: "Mobile",
    children: <p>hello</p>,
    img:
      "https://lh3.googleusercontent.com/-dx_PAM3P4bfKmt1RTp2jmyt3Dy72FgbjAXKIwcyghwAQNyB5pzyyHLwpXnTC7r3E9fL_Xlc9w=w640-h400-e365-rj-sc0x00ffffff",
  },
];
