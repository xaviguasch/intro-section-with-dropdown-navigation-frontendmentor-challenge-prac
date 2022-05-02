import * as styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ================== */
  /* Custom properties */
  /* ================== */

  :root {
    --ff-main: 'Epilogue', sans-serif;

    /* --fw-light: 300; */
    /* --fw-regular: 400; */
    --fw-medium: 500;
    /* --fw-semi-bold: 600; */
    --fw-bold: 700;

    --fs-07: 0.438rem;
    --fs-08: 0.5em;
    --fs-09: 0.563em;
    --fs-10: 0.625rem;
    --fs-11: 0.688em;
    --fs-12: 0.75rem;
    --fs-13: 0.813rem;
    --fs-14: 0.875rem;
    --fs-15: 0.938rem;
    --fs-16: 1rem;
    --fs-18: 1.125rem;
    --fs-20: 1.25rem;
    --fs-22: 1.375rem;
    --fs-24: 1.5rem;
    --fs-26: 1.625rem;
    --fs-28: 1.75rem;
    --fs-30: 1.875em;
    --fs-32: 2rem;
    --fs-36: 2.25rem;
    --fs-40: 2.5rem;
    --fs-48: 3rem;
    --fs-56: 3.5rem;
    --fs-60: 3.75rem;
    --fs-64: 4rem;
    --fs-72: 4.5rem;
    --fs-80: 5rem;

    /* Text */
    --clr-almost-white-text: hsla(0, 0%, 98%, 1);
    --clr-black-text: hsla(0, 0%, 8%, 1);
    --clr-medium-grey-text: hsla(0, 0%, 41%, 1);

    /* Background  */
    --clr-white-bg: hsla(0, 0%, 100%, 1);
  }

  body {
    background: var(--clr-white-bg);

    color: var(--clr-medium-grey-text);
    font-family: var(--ff-main);
    font-size: var(--fs-16);
    font-weight: var(--fw-regular);
    line-height: 1.625;
    text-align: center;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  /* ================== */
  /* Buttons & inputs */
  /* ================== */

  button {
  }
`
