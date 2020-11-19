import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, body {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Montserrat', sans-serif;

     
 }



`;





export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 991) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
