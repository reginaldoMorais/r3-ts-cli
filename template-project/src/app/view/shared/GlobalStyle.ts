import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100vh;
  }

  body {
    font-size: 14px !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 100 !important;

    a {
      cursor: pointer;
    }
  }
`;
