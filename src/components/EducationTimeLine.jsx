import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
const EducationTimeLine = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2026"
          iconStyle={{ background: "#03001C", color: "#fff" }}
          contentStyle={{ background: "#3b214a", color: "#f9f8ff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            B.E. Artificial Inteligence And Machine Learning
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bannari Amman Institute Of Technology
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#03001C", color: "#fff" }}
          contentStyle={{ background: "#3b214a", color: "#f9f8ff" }}
          icon={<GiBookshelf />}
        >
          <h3 className="vertical-timeline-element-title">HSC</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Victory Matric hr.Sec Shool
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#03001C", color: "#fff" }}
          contentStyle={{ background: "#3b214a", color: "#f9f8ff" }}
          icon={<FaAward />}
        >
          <h3 className="vertical-timeline-element-title">SSLC</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Victory Matric hr.Sec Shool
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EducationTimeLine;
