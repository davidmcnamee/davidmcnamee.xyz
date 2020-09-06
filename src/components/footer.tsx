import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Text>
        This site was built with Next.js and deployed with Vercel. Take a look
        at the source code on{" "}
        <a href="https://github.com/davidmcnamee/davidmcnamee.xyz">github</a>!
      </Text>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 5em;
  background-color: #292929;
`;

const Text = styled.p`
  font-size: 0.8em;
`;
