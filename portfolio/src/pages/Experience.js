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
          date="2022 - 2022"
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
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
