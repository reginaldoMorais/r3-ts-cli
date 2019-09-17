import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #app {
    background: rgba(1, 37, 46, 1);
    background: -moz-linear-gradient(top, rgba(1, 37, 46, 1) 0%, rgba(0, 133, 166, 1) 100%);
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, rgba(1, 37, 46, 1)),
      color-stop(100%, rgba(0, 133, 166, 1))
    );
    background: -webkit-linear-gradient(top, rgba(1, 37, 46, 1) 0%, rgba(0, 133, 166, 1) 100%);
    background: -o-linear-gradient(top, rgba(1, 37, 46, 1) 0%, rgba(0, 133, 166, 1) 100%);
    background: -ms-linear-gradient(top, rgba(1, 37, 46, 1) 0%, rgba(0, 133, 166, 1) 100%);
    background: linear-gradient(to bottom, rgba(1, 37, 46, 1) 0%, rgba(0, 133, 166, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#01252e', endColorstr='#0085a6', GradientType=0 );
  }
`;
