import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

     *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        width: 100%;
        min-height: 100vh;
        font-family: 'Barlow Condensed', sans-serif;
    }

    input, button, textarea, select {
        font-family: 'Barlow Condensed', sans-serif;

        &::placeholder {
            font-family: 'Barlow Condensed', sans-serif;
        }
    }

`;

export default GlobalStyles;