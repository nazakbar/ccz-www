import { injectGlobal } from 'styled-components';
import { bodyFonts } from '../utils/fonts';

injectGlobal `

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700');
  
  html {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${bodyFonts};
    font-weight: 400;
    font-size: 100%;
    font-size: 16px;
    background: #FAFAFA;
    color: #000;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  #app {
    height: 100%;
  }
`;