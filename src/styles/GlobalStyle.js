import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --fs-700: 4rem;
    --fs-600: 2.5rem;
    --fs-400: 1.7rem;

    --primary-color: #16171b;
    --secondary-color: #e2ae13;
    --complementary-color: #222327;
    --filler-color: #b1361e;

    html {
      min-height: 100%;
    }

    body {
      color: var(--secondary-color);
      background: rgb(33, 32, 32);
      background: radial-gradient(
        circle,
        rgba(33, 32, 32, 1) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      font-size: var(--fs-400);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2;
    }
    a {
      text-decoration: none;
    }
    img {
      display: block;
      width: 100%;
    }
    button,
    input,
    textarea {
      border: none;
      outline: none;
      color: inherit;
      font-family: inherit;
      font-size: inherit;
    }
    button {
      cursor: pointer;
    }
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default GlobalStyle;
