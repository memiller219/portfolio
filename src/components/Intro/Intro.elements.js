import styled from "styled-components";
import background from "../../images/bg2.jpg";


export const Background = styled.div`
background: url(${background}) no-repeat center;
background-origin: border-box;
background-size: cover;

@media screen and (max-width: 960px) {
  background-size: 50%contain;
  
}
`


export const Greeting = styled.div`
background-color: #011230;
height: auto;
width: 100%auto;
color: white;
text-align: center;
padding: 40px 10px;
`

export const GreetingContent = styled.div`
text-align: center;
font-weight: 100;
font-size: 1.2rem;
padding: 20px;
line-height: 1.5;

@media screen and (max-width: 960px) {
  font-size: 0.9rem;
}
`




export const IntroContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 30px);
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 1rem;
    height: 80vh;
  }
`;



export const IntroInfo = styled.div`
  grid-column-start: 1;
  grid-column-end: span 5;
  grid-row-start: 10;
  justify-self: center;
  align-self: center;  
  line-height: 1.75rem;
color: white;
  @media screen and (max-width: 960px) {
    grid-row-start: 7;
    margin-left: 0px;
    line-height: 1.5rem;
  }
`;

export const IntroName = styled.span`
  color: #15D07F;
  font-weight: 600;
  text-transform: uppercase;
`;
