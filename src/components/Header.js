import styled from "styled-components";
import recordPlayer from "../assets/images/icons/vinyl.png";
const Header = () => (
  <StyledHeader>
    <ImageWrapper>
      <img src={recordPlayer} alt="record-player" />
    </ImageWrapper>
    <h1>Memory Game</h1>
  </StyledHeader>
);

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 5%;
  gap: 15px;

  h1 {
    font-size: var(--fs-700);
    width: 100%;
  }

  border-bottom: 3px solid var(--secondary-color);
  margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  min-width: 50px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
