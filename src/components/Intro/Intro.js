import React from "react";
import "./Intro.css";
import Navbar from "../Navbar/Navbar";
import {
  IntroContainer,
  IntroName,
  IntroInfo,
  Background,
  Greeting,
  GreetingContent,
} from "./Intro.elements";

const Intro = () => {
  return (
    <>
      <Background>
        <Navbar />
        <IntroContainer>
          <IntroInfo>
            Hello! My name is <IntroName>Michael Miller.</IntroName>
            <div>I am a Front-end Developer.</div>
            <div>Welcome to my page!</div>
          </IntroInfo>
        </IntroContainer>
      </Background>
      <Greeting>
        <h2>A Little About Me: </h2>
        <GreetingContent>
          I began my journey as a Front-end Developer mainly working freelance jobs around 2 years ago. I've worked with startups, where I dived head-first into learning bits and pieces of Backend development.  I love problem-solving, coding from scratch, and I have a passion for learning new things.  
        </GreetingContent>
      </Greeting>
    </>
  );
};

export default Intro;
