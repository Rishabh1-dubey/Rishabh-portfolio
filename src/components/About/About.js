import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Rishabh Dubey</strong> . I am currently into front-end web development. My favorite part of programming is the problem-solving aspect and learning new technologies. I love the feeling of finally getting that red squibbly line out of the way. My core stack is React, Tailwind, Redux-toolkit,    Java (DSA **). I am also familiar with  Jest. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
