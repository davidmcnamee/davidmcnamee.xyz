import { FC } from "react";
import styled from "styled-components";
import { NameSvg } from "./name-svg";
import { HeroBackground } from "./hero-background";
import { LaptopAnimation } from "./laptop-animation";

export const Hero: FC = () => {
  return (
    <Container>
      <HeroBackground />
      <NameSvg />
      <LaptopAnimation />
      <HelloBox>
        <h1>Hey 👋</h1>
        <BlurbParagraph>
          My name's David, I'm a computer science and business student{" "}
          <a href="https://twitter.com/UWaterloo" target="_blank">
            @UWaterloo
          </a>
          <br />
          Nice to meet you! 😄
          <br />
          This website is still under development, so please ignore the lack of
          content below.
          <br />
          <br />
          You can find my contact info by scrolling to the right --{">"}
        </BlurbParagraph>
      </HelloBox>
    </Container>
  );
};

const Container = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelloBox = styled.div`
  position: absolute;
  left: 35%;
  width: 55%;
  display: block;
  top: 18%;
`;

const BlurbParagraph = styled.p`
  font-size: 2rem;
`;
