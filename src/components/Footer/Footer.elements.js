import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  padding-bottom: 20px;
  background-color: #011230;
  width: 100%;
`;

export const FooterInfo = styled.div`
  color: #f7f5eb;
  line-height: 1.4rem;
  font-weight: 100;
  text-align: center;
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
    line-height: 1rem;
    text-align: center;
    margin: 10px;
  }
`;

export const FooterIcons = styled.a` 

font-size: 1.5rem;
padding: 20px;
color: white;
text-align: center;
transition-duration: 0.4s;
cursor: pointer;
text-decoration: none;
&:hover {
  color: #15d07f;
}
`

export const IconsContainer = styled.div` 
text-align: center;
`

export const FooterCopyright = styled.p` 
color: white;
padding: 30px 0 0px;
font-weight: 100;
font-size: 12px;
text-align: center;
`


