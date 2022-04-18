import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
  height: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  }

  body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  }

  * {
  margin: 0;
  }
 
  *, *::before, *::after {
  box-sizing: border-box;
  }
`
