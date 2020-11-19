import React from "react";
import {
  FooterContainer,
  FooterInfo,
  FooterIcons,
  IconsContainer,
  FooterCopyright
} from "./Footer.elements";
import { DiGithubBadge } from "react-icons/di";
import { ImLinkedin } from "react-icons/im";
import { FaFilePdf } from "react-icons/fa";
import {RiCopyrightLine} from 'react-icons/ri'

import Resume from '../../images/Resume.pdf';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        Thank you for visiting my page!
        <div>Click the links below to view other stuff homie!</div>
      </FooterInfo>
      <IconsContainer>
        <FooterIcons href="https://github.com/memiller219">
          <DiGithubBadge />
        </FooterIcons>
        <FooterIcons href="https://www.linkedin.com/in/michaelmiller219/">
          <ImLinkedin />
        </FooterIcons>
        <FooterIcons href={Resume}>
          <FaFilePdf />
        </FooterIcons>
      </IconsContainer>
      <FooterCopyright>Website made by me: Michael Miller {<RiCopyrightLine />} 2020</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
