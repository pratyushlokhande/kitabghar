import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

     *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100vh;
        font-family: 'Barlow Condensed', sans-serif;
    }

`;

export default GlobalStyles;