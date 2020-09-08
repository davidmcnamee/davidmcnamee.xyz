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
        </BlurbParagraph>
        <BlurbParagraph>Nice to meet you! 😄</BlurbParagraph>
        <BlurbParagraph>
          My interests are in Software Engineering, Entrepreneurship, and
          Finance.
        </BlurbParagraph>
      </HelloBox>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelloBox = styled.div`
  position: absolute;
  top: 15vh;
  height: 70vh;
  left: 35%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
`;

const BlurbParagraph = styled.p`
  font-size: 2em;
  margin-bottom: 0.5em;
`;
