import styled from "styled-components";
import { motion, useSpring } from "framer-motion";
import React, { FC, useRef, useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export const Sidebar: FC = () => {
  const sidebarRef = useRef<HTMLUListElement>(null);
  const xPos = useSpring(0, { damping: 40 });
  const threeDotOpacity = useSpring(0, { damping: 40 });

  const open = () => {
    xPos.set(-sidebarRef.current.getBoundingClientRect().width);
    threeDotOpacity.set(0);
  };

  const close = () => {
    xPos.set(0);
    threeDotOpacity.set(1);
  };

  useEffect(() => {
    const checkIfRHS = (event: MouseEvent) => {
      if (window.scrollY < 500) return open();
      if (event.clientX / window.innerWidth >= 0.66) open();
      else close();
    };
    const onMouseOut = () => {
      if (window.scrollY >= 500) close();
    };
    document.addEventListener("scroll", checkIfRHS);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mousemove", checkIfRHS);
    return () => {
      document.removeEventListener("scroll", checkIfRHS);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mousemove", checkIfRHS);
    };
  }, []);

  return (
    <>
      <ThreeDotContainer style={{ opacity: threeDotOpacity }}>
        <MenuOutlined style={{ fontSize: "2em" }} />
      </ThreeDotContainer>
      <ItemContainer ref={sidebarRef} style={{ x: xPos }}>
        <a href="/davidmcnamee-resume.pdf">
          <Item>Resumé</Item>
        </a>
        <a href="https://github.com/davidmcnamee">
          <Item>Github</Item>
        </a>
        <a href="https://www.linkedin.com/in/david-mcnamee/">
          <Item>LinkedIn</Item>
        </a>
        <a href="/">
          <Item>Project: Peruse</Item>
        </a>
        <a href="/">
          <Item>Project: Ingredient Simplifier</Item>
        </a>
        <a href="/">
          <Item>Project: Text Summarizer</Item>
        </a>
      </ItemContainer>
    </>
  );
};

const ThreeDotContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  padding: 0.5em;
`;

const ItemContainer = styled(motion.ul)`
  position: fixed;
  left: 100vw;
  /* right: 0; */
  max-width: 20%;
  min-width: 10%;
  z-index: 100;
  background-image: linear-gradient(
    80deg,
    rgb(238, 0, 153, 0.3),
    rgb(238, 0, 153, 1)
  );
`;

const Item = styled.li`
  list-style-type: none;
  padding: 1em 1em 1em 2em;
  text-align: right;
  :hover {
    background-image: linear-gradient(
      to right,
      rgb(238, 0, 153, 0.4),
      rgb(238, 0, 153, 1)
    );
  }
  color: var(--text-color);
  border-bottom: 0.001px solid black;
`;
