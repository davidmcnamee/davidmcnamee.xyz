import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

export type CardProps = {
  backgroundColor: string;
  img: string;
  imgLeft: boolean;
  children: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { backgroundColor, img, imgLeft, children } = props;
  return (
    <InvisibleContainer ref={ref}>
      {imgLeft && <Image src={img} />}
      <Container style={{ backgroundColor }}>{children}</Container>
      {!imgLeft && <Image src={img} />}
    </InvisibleContainer>
  );
});

const Container = styled.div`
  flex: 1;
  margin: 0 2em;
  padding: 5em;
`;

const InvisibleContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  max-width: 42%;
  flex: 1;
  margin: 0 2em;
`;
