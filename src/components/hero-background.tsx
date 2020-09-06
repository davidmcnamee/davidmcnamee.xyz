import styled from "styled-components";
import {
  useSpring,
  useTransform,
  useViewportScroll,
  motion,
} from "framer-motion";
import { useEffect, FC } from "react";

export const HeroBackground: FC = () => {
  const backgroundWidth = useSpring(0, { damping: 40, mass: 0.2 });
  const desiredBackgroundWidth = useTransform(
    useViewportScroll()["scrollY"],
    (y) => (y > 500 ? 0 : 80)
  );

  useEffect(() => {
    backgroundWidth.set(80);
    const unsubscribe = desiredBackgroundWidth.onChange((val) => {
      backgroundWidth.set(val);
    });
    () => unsubscribe();
  }, [backgroundWidth, desiredBackgroundWidth]);

  const backgroundWidthPercent = useTransform(backgroundWidth, (w) => `${w}%`);

  return <BackgroundBox style={{ width: backgroundWidthPercent }} />;
};

const BackgroundBox = styled(motion.div)`
  position: absolute;
  height: 80%;
  border-radius: 1em 8em;
  background-color: #292929;
`;
