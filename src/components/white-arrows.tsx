import styled, { keyframes } from "styled-components";
import {
  MotionValue,
  useViewportScroll,
  useTransform,
  motion,
} from "framer-motion";
import { FC } from "react";

type DownArrowProps = {
  isLower?: boolean;
  opacity?: MotionValue<number>;
};

const ArrowSVG: FC<DownArrowProps> = (props) => {
  const { isLower = false, opacity } = props;
  return (
    <SVG
      isLower={isLower}
      style={{ opacity }}
      preserveAspectRatio="none"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="down"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
    </SVG>
  );
};

export const WhiteArrows = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, (y) => (500 - y) / 500);

  return (
    <>
      <ArrowSVG opacity={opacity} />
      <ArrowSVG isLower={true} opacity={opacity} />
    </>
  );
};

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
`;

const SVG = styled(motion.svg)<DownArrowProps>`
  animation: ${upDown} 3s ease-in-out infinite alternate;
  width: 25vw;
  height: 5vw;
  position: fixed;
  color: #fff;
  top: calc(80vh + ${(p) => (p.isLower ? "25px" : "0px")});
  left: 37.5vw;
`;
