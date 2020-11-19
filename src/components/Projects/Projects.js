import React from "react";
import {
  ProjectsContainer,
  HeaderContainer,
  ProjectsHeader,
  ProjectImage,
  ProjectName,
  ProjectLinks,
  ProjectLink,
  ProjectDescription,
} from "./Projects.elements";
import "./Projects.css";

import Hira from "../../images/hiraKataMockUpPNG.png";
import Ravenous from "../../images/ravenousMockUp.png";
import FourCast from '../../images/4cast.png';

const Projects = () => {
  return (
    <>
      <HeaderContainer>
        <ProjectsHeader>Projects</ProjectsHeader>
      </HeaderContainer>

      <ProjectsContainer>
        <ProjectImage>
          <img className="Projects" src={Hira} alt="hira"></img>
          <ProjectName className="Hira">Hira-Kata</ProjectName>
          <ProjectDescription>
            A simple memory game built with vanilla JavaScript, <br />
            HTML, CSS, & jQuery. 
          </ProjectDescription>
          <ProjectLinks>
            <ProjectLink href="https://github.com/memiller219/Hira-Kata">
              GitHub
            </ProjectLink>
            <ProjectLink href="https://hira-kata.herokuapp.com/">
              Demo
            </ProjectLink>
          </ProjectLinks>
        </ProjectImage>
        <ProjectImage>
          <img className="Projects" src={Ravenous} alt="ravenous"></img>
          <ProjectName className="ravenous">ravenous</ProjectName>
          <ProjectDescription>
            A Yelp-like clone, utilizing calls to Yelp's API. <br />
            Made with React. 
          </ProjectDescription>
          <ProjectLinks>
            <ProjectLink href="https://github.com/memiller219/ravenous">
              GitHub
            </ProjectLink>
            <ProjectLink href="https://ravenous12.herokuapp.com/">
              Demo
            </ProjectLink>
          </ProjectLinks>
        </ProjectImage>
        <ProjectImage>
          <img className="Projects" src={FourCast} alt="fourCast"></img>
          <ProjectName className="ravenous">4Cast</ProjectName>
          <ProjectDescription>
            A weather app using a real-time weather API. <br /> Made with React.
          </ProjectDescription>
          <ProjectLinks>
            <ProjectLink href="https://github.com/memiller219/4cast-app">
              GitHub
            </ProjectLink>
            <ProjectLink href="https://fourcast-weather.herokuapp.com/">
              Demo
            </ProjectLink>
          </ProjectLinks>
        </ProjectImage>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
