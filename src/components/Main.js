import MemoryGame from "./Game/MemoryGame";
import styled from "styled-components";

const Main = () => (
  <MainStyled>
    <MemoryGame />
  </MainStyled>
);

const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Main;
