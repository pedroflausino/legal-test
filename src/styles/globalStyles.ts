import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter';
    }
    body {
        background: #09090B;
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyles