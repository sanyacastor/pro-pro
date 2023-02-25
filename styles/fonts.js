import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Base&Bloom";
    src: local("Base&Bloom"), local("Base&Bloom");
    src: url('/fonts/Base&Bloom-Base&Bloom-Web.woff2') format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Lack";
    src: url('/fonts/lack-regular-webfont.woff') format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Piazzolla";
    src: url('/fonts/Piazzolla-Regular.woff2') format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: #e5e5e5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
