import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#1C1427">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#1C1427", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mahatma Hansraj Modern School, Jhansi
          </h3>

          <h4 className="vertical-timeline-element-subtitle">CBSE, Class X</h4>

          <p>CGPA: 10</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#1C1427", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mahatma Hansraj Modern School, Jhansi
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            CBSE, Class XII
          </h4>

          <p>Percentage: 91.8%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2022 - Dec 2022"
          iconStyle={{ background: "#7ECA9C", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - OnSolve LLC
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, Karnataka
          </h4>
          <p>
            Fixed around 20 bugs (predominantly frontend) in the existing
            product to enhance the user experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#1C1427", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BITS Pilani, K K Birla Goa Campus
          </h3>

          <h4 className="vertical-timeline-element-subtitle">B.E. Chemical</h4>

          <p>CGPA: 7.68</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2023 - Jul 2023"
          iconStyle={{ background: "#7ECA9C", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDE Intern - Furrl
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, Karnataka
          </h4>
          <p>
            Reconstructed the home page and implemented server-side rendering
            with Next.js to optimize SEO performance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - Present"
          iconStyle={{ background: "#7ECA9C", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDE 1 - iRasus Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gurugram, Haryana
          </h4>
          <p>
            Developing and optimizing the Clean Tech Preksha (TM) - Analytics &
            Predictive Modelling Platform for Battery Storage, Charging and
            Solar, using ReactJS, Material UI, and JavaScript.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
