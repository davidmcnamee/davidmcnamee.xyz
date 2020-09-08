import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

export type CardProps = {
  background: string;
  img: string;
  imgLeft: boolean;
  children: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { background, img, imgLeft, children } = props;
  return (
    <InvisibleContainer ref={ref}>
      {imgLeft && <Image src={img} />}
      <Container style={{ background }}>{children}</Container>
      {!imgLeft && <Image src={img} />}
    </InvisibleContainer>
  );
});

const Container = styled.div`
  flex: 1;
  margin: 2em;
  padding: 3em;
  border-radius: 1.5em;
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

const InvisibleContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  max-width: 42%;
  flex: 1;
  margin: 2em;
  border-radius: 1.5em;
  @media only screen and (max-width: 750px) {
    max-width: 80%;
  }
`;
