import * as React from 'react';
import App from 'next/app';
import { getTokens } from '@kiwicom/orbit-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
require('typeface-inter');

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: #15151A;
  }

  a {
    text-decoration: none;
  }
`

const customGrid = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 78, // max-width: 1440px
    xl: 78, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
}

const theme = {
  palette: {
    product: {
      light: "#ff9999",
      lightHover: "#ff7f7f",
      lightActive: "#ff6666",
      normal: "#5542D0",
      normalHover: "#e50000",
      normalActive: "#cc0000",
      dark: "#372896",
      darkHover: "#720000",
      darkActive: "#630000",
      darker: "#530000"
    },
  },
  base: {
    fontSizeSm: "14px",
    fontSizeMd: "16px",
    fontSizeLg: "18px",
    borderRadius: "6px",
  },
};

const tjm_theme = getTokens(theme)

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={{ orbit: tjm_theme, awesomegrid: customGrid }}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
