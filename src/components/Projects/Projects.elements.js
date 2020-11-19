
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px;
  background-color: #f7f4fa;
`;

export const ProjectsHeader = styled.div`
  background-color: #f7f4fa;
  margin: auto;
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: uppercase;
  border-bottom: 1px solid #001334;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  background-color: #f7f4fa;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  padding-bottom: 80px;
  margin: auto;
  text-align: center;
  background: #f7f4fa;
`;

export const ProjectImage = styled.div`
  @media screen and (max-width: 960px) {
    grid-column-start: 2;
  }
`;

export const ProjectLinks = styled.div`
  padding: 40px;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 960px) {
    grid-column-start: 2;
  }
`;

export const ProjectLink = styled.a`
  background-color: transparent;
  border: none;
  color: #001334;
  text-decoration: none;
  transition-duration: 0.4s;
  text-align: center;
  cursor: pointer;
  padding: 20px;
  margin: 20px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 1px 10px #b7bfc7;
  &:hover {
    background-color: #1b3561;
    color: #15d07f;
    box-shadow: 0px 1px 10px #b7bfc7;
  }
`;

export const ProjectName = styled.div`
  font-size: 1.2rem;
`;
export const ProjectDescription = styled.div`
  font-size: 0.8rem;
`;
