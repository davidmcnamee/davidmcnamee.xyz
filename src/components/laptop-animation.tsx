import Lottie from "react-lottie";
import styled from "styled-components";
import { FC, useEffect, useState, useRef } from "react";
import laptop from "../util/laptop-animation.json";

export const LaptopAnimation: FC = () => {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: laptop,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={"30vw"}
        style={{
          margin: 0,
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 3%;
`;
