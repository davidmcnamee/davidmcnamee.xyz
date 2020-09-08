import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs";

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
};

type IconType =
  | "triangle"
  | "circle"
  | "arrowUp"
  | "upDown"
  | "box"
  | "hexa"
  | "cross";

type SVGProps = {
  stroke?: boolean;
  color?: string | number | any;
  width: number;
  icon: IconType;
  left: string;
  top: string;
  hiddenMobile?: boolean;
};

const SVG = ({
  stroke = false,
  color = ``,
  width,
  icon,
  left,
  top,
  hiddenMobile = false,
}: SVGProps) => (
  <svg
    style={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? `none` : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
);

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const UpDown = styled.div`
  animation: ${upDown} 4s ease-in-out infinite alternate;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const UpDownWide = styled.div`
  animation: ${upDownWide} 18s ease-in-out infinite alternate;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

type DividerProps = {
  speed: number;
  offset: number;
  children?: React.ReactNode;
  bg?: string;
  fill?: string;
  clipPath?: string;
  className?: string;
  factor?: number;
};

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
}: DividerProps) => (
  <StyledParallaxLayer
    bg={bg}
    fill={fill}
    clipPath={clipPath}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </StyledParallaxLayer>
);

const StyledParallaxLayer = styled(ParallaxLayer)<
  Pick<DividerProps, "bg" | "fill" | "clipPath">
>`
  position: absolute;
  width: full;
  height: full;
  background: ${(p) => p.bg};
  background-color: ${(p) => p.bg};
  #contact-wave {
    color: ${(p) => p.fill};
    fill: currentColor;
  }
  clip-path: ${(p) => p.clipPath};
`;

type SVGSectionProps = {
  offset: number;
  factor: number;
};

export const SvgSection: FC<SVGSectionProps> = ({ offset, factor }) => {
  return (
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG
          icon="triangle"
          hiddenMobile
          width={48}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
        />
        <SVG
          icon="hexa"
          width={48}
          stroke
          color="icon_red"
          left="60%"
          top="70%"
        />
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="50%"
        />
        <SVG
          icon="circle"
          width={16}
          color="icon_darker"
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          width={16}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <SVG
          icon="cross"
          width={16}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_darkest"
          left="75%"
          top="10%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="circle"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG
        icon="upDown"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <SVG
        icon="triangle"
        width={8}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
      />
      <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <SVG
        icon="box"
        hiddenMobile
        width={64}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG
        icon="hexa"
        width={16}
        stroke
        color="icon_darker"
        left="10%"
        top="50%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_darker"
        left="80%"
        top="70%"
      />
    </Divider>
  );
};
