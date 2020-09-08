import styled from "styled-components";
import { motion, useSpring } from "framer-motion";
import React, { FC, useRef, useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export const Sidebar: FC = () => {
  const sidebarRef = useRef<HTMLUListElement>(null);
  const xPos = useSpring(0, { damping: 40 });
  const threeDotOpacity = useSpring(0, { damping: 40 });

  const open = () => {
    xPos.set(-sidebarRef.current!.getBoundingClientRect().width);
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
    document.addEventListener("scroll", checkIfRHS as any);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mousemove", checkIfRHS);
    return () => {
      document.removeEventListener("scroll", checkIfRHS as any);
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
        <a href="https://chrome.google.com/webstore/detail/peruse/fajccaeldgbiaigahbfpalgnbapjjmhp">
          <Item last={true}>Project: Peruse</Item>
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
  min-width: 10em;
  z-index: 100;
  background-image: linear-gradient(
    80deg,
    rgb(238, 0, 153, 0.3),
    rgb(238, 0, 153, 1)
  );
  border-bottom-left-radius: 2em;
`;

const Item = styled.li<{ last?: boolean }>`
  list-style-type: none;
  font-size: 1.5em;
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
  border-bottom: ${p => p.last ? '0px' : '0.001px'} solid black;
`;
