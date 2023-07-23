import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
// import illustrationImage from "../assets/illustration.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        {/* <img className="illustrationImage" src={illustrationImage} /> */}
        <h2>Hi, my name is Anushka</h2>
        <div className="prompt">
          <p>
            An aspiring software developer with a passion for learning and
            creating.
          </p>
          <a href="https://www.linkedin.com/in/anushka-raj-bagun-9789b4195/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/anushka0202">
            <GitHubIcon />
          </a>
          <a href="mailto:anuraj.bagun02@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript, TypeScript, C++</span>
          </li>
          <li className="item">
            <h2>Tools and Frameworks</h2>
            <span>
              React.js, Redux, Next.js, Unit Testing, Material UI, HTML, CSS,
              Git, Jira, C# .NET development
            </span>
          </li>
          <li className="item">
            <h2>Relevant Concepts</h2>
            <span>
              Data Structures and Algorithms (DSA), Object-Oriented Programming
              (OOP), Databases
            </span>
          </li>
          <li className="item">
            <h2>Certifications</h2>
            <span>
              Hands-On Introduction: React (LinkedIn), Web Development (QSTP,
              BITS Goa)
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
