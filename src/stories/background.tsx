import { FC, useEffect, useRef } from "react";
import { Engine, Render, World, Bodies, Body } from "matter-js";
import styled from "styled-components";

type BackgroundProps = {};

export const Background: FC = () => {
  const container = useRef(null);
  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      element: container.current,
      engine,
    });
    const boxA = Bodies.circle(400, 200, 40, {
      force: { x: 0.01, y: 0 },
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      restitution: 1,
    });
    const boxB = Bodies.circle(450, 50, 40, {
      force: { x: -0.01, y: 0.03 },
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      restitution: 1,
    });
    Body.rotate(boxA, 27);
    Body.rotate(boxB, 86);
    const ground = Bodies.rectangle(400, 300, 810, 1, {
      isStatic: true,
      friction: 0,
      frictionStatic: 0,
      restitution: 1,
    });
    const leftWall = Bodies.rectangle(0, 0, 1, 300, {
      isStatic: true,
      friction: 0,
      frictionStatic: 0,
      restitution: 1,
    });
    const rightWall = Bodies.rectangle(400 + 810, 0, 1, 300, {
      isStatic: true,
      friction: 0,
      frictionStatic: 0,
      restitution: 1,
    });
    const ceiling = Bodies.rectangle(400, 0, 810, 1, {
      isStatic: true,
      friction: 0,
      frictionStatic: 0,
      restitution: 1,
    });
    World.add(engine.world, [boxA, boxB, ground, leftWall, rightWall, ceiling]);
    engine.world.gravity.scale = 0;
    Engine.run(engine);
    Render.run(render);
  }, []);

  return <Container ref={container} />;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
