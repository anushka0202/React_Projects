import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/anushka-raj-bagun-9789b4195/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/anushka0202">
          <GitHubIcon />
        </a>
        <a href="https://m.facebook.com/anushka.raj.14?ref=bookmarks">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/anushka.420_/">
          <InstagramIcon />
        </a>
      </div>
      <p>&copy; 2023 Anushka</p>
    </div>
  );
};

export default Footer;
