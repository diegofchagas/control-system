/* gap-s : 625rem;
gap: 1.25rem; */


import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
  font-size:1rem;
}

.box{
  display:grid;
  gap:1.25rem;
}

`;