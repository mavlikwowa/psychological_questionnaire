import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li,
  input, textarea, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background-color: transparent;
  }

  input[type=password]::-ms-reveal,
  input[type=password]::-ms-clear
  {
    display: none;
  }

  ol, ul {
    list-style: none;
  }

  s {
    text-decoration: none;
  }

  a {
    display: inline;
    text-decoration: none;
    font-size: inherit;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  b {
    font-weight: bold;
  }

  body {
    background: #E0E0E0;
  }
  
  html {
    font-family: 'Manrope',sans-serif;
  }

  #root {
    max-width: 1280px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

export const isDesktopSmall = '@media (min-width: 940px)'
export const isDesktopMedium = '@media (min-width: 1280px)'
export const isDesktopLarge = '@media (min-width: 1600px)'
