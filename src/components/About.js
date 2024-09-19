import React from "react";
import "./About.css"; // Create an About-specific CSS file for custom styles

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi, I'm TANISHKA, a passionate web developer with a focus on building
          responsive and user-friendly web applications. With a background in
          front-end and backend technologies like <strong>React</strong>,{" "}
          <strong>JavaScript</strong>, <strong>HTML</strong>, and{" "}
          <strong>CSS</strong>, I strive to create websites and apps that are
          both functional and aesthetically pleasing.
        </p>
        <p>
          I love solving complex problems, learning new technologies, and
          constantly improving my skills. I have experience working on a range
          of projects, from personal portfolios to full-fledged web
          applications. Let's build something great together!
        </p>
        <a href="file:///C:/Users/olita/Downloads/TANISHKA_CV.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default About;
