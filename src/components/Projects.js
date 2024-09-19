import React from "react";
// import "./Projects.css"; // Add styles specific to Projects if needed

const Projects = () => {
  const projectList = [
    {
      name: "Keeper App",
      description:
        "A personal keeper app to manage all the todos for the day and add specific information about the day.",
      link: "https://github.com/TanishkaOli/KeeperApp",
      demo: "https://github.com/TanishkaOli/KeeperApp",
    },
    {
      name: "E-commerce Website",
      description:
        "An e-commerce web app with product searching and sorting applied along with payment gateway.",
      link: "https://github.com/TanishkaOli/myMarket",
      demo: "https://github.com/TanishkaOli/myMarket",
    },

    {
      name: "Basic Login Page using Conditional Rendering",
      description:
        "It is usually a Login page UI which I made just for practicing the use of conditional rendering.  ",
      link: "https://github.com/TanishkaOli/BasicLoginPAgeUSingConditionalRendering",
      demo: "https://github.com/TanishkaOli/BasicLoginPAgeUSingConditionalRendering",
    },
    {
      name: "React Props Practise",
      description:
        "This is just a basic practicing page where I practised about the use of Props and how to apply props. ",
      link: "https://github.com/TanishkaOli/ReactPropsPractise",
      demo: "https://github.com/TanishkaOli/ReactPropsPractise",
    },
    {
      name: "Mapping Components Practise",
      description:
        "This is just a basic practicing page where I practised about the use of mapping components. ",
      link: "https://github.com/TanishkaOli/MappingComponentsPractise",
      demo: "https://github.com/TanishkaOli/MappingComponentsPractise",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>{" "}
            |{" "}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
