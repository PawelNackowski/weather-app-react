import { createGlobalStyle } from "styled-components";
import backgroundImage from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    body {
        font-family: "Open Sans", sans-serif;
        min-height: 100vh;
        background: url("${backgroundImage}");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        ;
    }
`