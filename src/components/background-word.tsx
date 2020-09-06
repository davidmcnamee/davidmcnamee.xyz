import React, { FC, useEffect, MutableRefObject, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type BackgroundWordProps = {
  cardRefs: {
    ref: MutableRefObject<HTMLDivElement>;
    title: string;
  }[];
};

export const BackgroundWord: FC<BackgroundWordProps> = (props) => {
  const { cardRefs } = props;
  const [title, setTitle] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const newTitle =
        cardRefs.find((c) => {
          const rect = c.ref.current.getBoundingClientRect();
          const yRelativeToMiddle = rect.y - window.innerHeight / 2;
          const diff =
            yRelativeToMiddle < 0
              ? Math.abs(yRelativeToMiddle) - rect.height
              : yRelativeToMiddle;
          return diff < window.innerHeight / 2;
        })?.title ?? "";
      if (newTitle !== title) {
        setTitle(newTitle);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [cardRefs]);

  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled(motion.h1)`
  color: white;
  @supports (-webkit-text-stroke: 0.3px white) {
    color: transparent;
    -webkit-text-stroke: 0.3px white;
    text-shadow: none;
  }
`;

export const Spacer = styled.div`
  height: 100vh;
  width: 100vw;
`;
