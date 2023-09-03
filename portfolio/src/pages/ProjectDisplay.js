import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.demo} target="_blank">
        <button className="btn">Live Demo</button>
      </a>
      <a href={project.github} target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
};

export default ProjectDisplay;
