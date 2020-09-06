import { FC, ReactNode } from "react";
import styled from "styled-components";

type MyButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const MyButton: FC<MyButtonProps> = styled.button`
  padding: 20px;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 25px;
  outline: none !important;
  box-shadow: none !important;
  font-size: 1.2em;
  :hover {
    border-color: orange;
  }
`;
