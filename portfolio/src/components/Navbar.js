import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Resume from "../assets/Anushka_Resume.pdf";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  //variable to get info about where in the app you are in
  const location = useLocation();

  //when we are on a smaller screen we want our navbar to close automatically once we click on Home/Projects/Experience
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    // we want the id to be open if expandNavbar is true and close if expandNavbar is false
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      {/* this is the button we are gonna use to expand the navbar whenever we are in a smaller screen */}
      {/* on clicking it sets the expandNavbar state to be whatever its prev value was not(basically, if ot was true, it will become false and vice versa) */}
      {/* logic is in Navbar.css file (#open) */}
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <a href={Resume} download>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
