import Box2 from "../Box2/Box2";

import { styled } from "styled-components";

const ControlDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: rgb(47, 255, 127);
`;

export default function Box1() {
  return (
    <ControlDiv>
      <Box2 />
    </ControlDiv>
  );
}
