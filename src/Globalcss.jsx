import { createGlobalStyle } from "styled-components";

export const Globalcss = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;  
    font-family: 'Poppins', sans-serif;
}
html {
    font-size: 100%;
}
// Scroll bar
::-webkit-scrollbar{
    width: .75rem;
}
::-webkit-scrollbar-track{
    background-color: #4250b2;
}
::-webkit-scrollbar-thumb{
    background: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    background-clip: content-box;
}

body {
    background-color: ${({theme}) =>theme.colors.bg };
}
a {
    color: #4250b2;
}
section {
    padding: 3rem 0;
}
.container {
    max-width: 90%;
    margin: 0 auto;
}
.grid {
    display: grid;
    gap: 2rem;
}
.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}
.com-heading {
    text-align: center;
}
input, textarea {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  border: .0625rem solid #ced4da;
  border-radius: 0.25rem;
}
input:focus, textarea:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgb(13 110 253 / 40%);
}
table {
    border-collapse: collapse;
  }
tr {
  border: 1px solid #dee2e6;
}
th {
  padding: 0.75rem;
}
td {
  padding: 0.75rem;
  vertical-align: top;
  border: 1px solid #dee2e6;
}

@media all and (max-width: ${({theme}) =>theme.media.tab }) {
  html {
    font-size: 80%;
  }
  .container {
    max-width: 95%;
  }
  .grid {
    gap: 1rem;
  }
}

@media all and (max-width: ${({theme}) =>theme.media.mobile }) {
  section {
    padding: 1rem 0;
  }
  .container {
    max-width: 99%;
  }
  .grid-two-column {
    grid-template-columns: repeat(1,1fr);
  }    
}

`;
