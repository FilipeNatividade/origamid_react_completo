import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        padding-top: 4rem;
        margin: 0;
        color: #333;
        --type-firt:Helvetica,Arial,sans-serif;
        --type-second:'Spectral', Georgia;
        font-family: var(--type-firt);
    }

    h1,h2,h3,h4,p{
        margin: 0;
    }
    ul,li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    img{
        display: block;
        max-width: 100%;
    }
    button,input {
        display: block;
        font-size: 1rem;
        color: #333;
        font-family: var(--type-firt);
    }

    button{
        cursor: pointer;
        border:none ;
     
    }

    a{
       text-decoration :none ;
    }
    .container{
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }
`;
