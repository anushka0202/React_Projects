import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Anushka</h2>
        <div className="prompt">
          <p>
            An aspiring software developer with a passion for learning and
            creating.
          </p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Tools and Frameworks</h2>
            <span>
              React.js, Redux, Unit Testing, C# .NET development, Git, GitLab,
              Jira
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
            <h2>Programming Languages</h2>
            <span>JavaScript, C++, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
