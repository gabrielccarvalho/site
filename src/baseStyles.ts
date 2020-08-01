import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    background: '#282a36',
    selection: '#44475a',
    foreground: '#f8f8f2',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ff79c6',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c',
    transparent: 'transparent'
  },
  textWeights: {
    normal: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800'
  },
  textSizes: {
    xxl: '4rem', // 72px
    xl: '2.8rem', // 46px
    llg: '2rem', // 26px
    lg: '1.8rem', // 30px
    mmd: '1.4rem',
    md: '1.15rem', // 22px
    sm: '1rem',
    xs: '0.888rem'
  },
  shadow: '0px 0px 11px #0000002C',
  space: {
    xs: '0.222rem', // 4px
    sm: '0.444rem', // 8px
    md: '0.666rem', // 12px
    lg: '0.888rem', // 18px
    xl: '1.111rem', // 20px
    xxl: '1.333rem' // 24px
  }
}

export const BaseStyle = createGlobalStyle`

  body, html {
    background-color: ${theme.colors.background};
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 14px !important;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: unset;
    color: unset;
  }

  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
