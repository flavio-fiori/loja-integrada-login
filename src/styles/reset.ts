import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  html {
    @media (max-width: 67.5rem) {
      font-size: 93.75%;
    }
    @media (max-width: 45rem) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #1a202c;
  }

  button {
    border: 0;
    cursor: pointer;
  }
  
  fieldset {
    border: 0;
  }

`;
