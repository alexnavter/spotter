import { createGlobalStyle } from "styled-components";
import "@fontsource/karla";

const GlobalStyles = createGlobalStyle`


*, ::after, ::before {
  box-sizing: border-box;
}


body {
  margin: 0;
  font-family: "Helvetica";
  font-size: 1rem;
  background-color: black;
  min-height: 100vh;
  padding: 20px;
}

  
h1,h2{
  padding: 0;
  margin: 0;
  list-style: none;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button, input {
  font-family: inherit;
  font-size:inherit;
  border: none;
}

textarea:focus, input:focus, select:focus{
    outline: none;
}
  
button {
  cursor: pointer;
}

a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }


`;

export default GlobalStyles;
