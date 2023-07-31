import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

import { colorButton, colorText } from './constants'

import desktop from './assets/desktop.png'

import { Fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  ${Fonts}
  
  :root {
    --bg-color: #0e1014;
    --color-text: ${colorText};
    --color-button: ${colorButton};
    --background-image: url(${desktop});
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-height: 100vh;
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-color: var(--bg-color);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    color: var(--color-text);

    @media (max-width: 320px) {
      background-image: none;
    }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--color-text)
  }
  `
