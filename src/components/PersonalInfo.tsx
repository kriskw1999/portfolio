import React from "react";
import "../style/personalInfo.scss";
import Sphere from "./ThreeScene.tsx";

const PersonalInfo: React.FC = () => {
  return (
    <div className="personal-info-container">
      <div className="divider" />
      <h1 className="header">Personal Info</h1>
      <div className="content">
        <div className="info-card">
          <div className="info-paragraph">
            <span className="info-type">Name:</span>
            <span>Krzysztof Witkowski</span>
          </div>
          <div className="info-paragraph">
            <span className="info-type">Address:</span>
            <span>Bernardino Verro street 17 Milan</span>
          </div>
          <div className="info-paragraph">
            <span className="info-type">Phone:</span>
            <span>+39 392 470 4791</span>
          </div>
          <div className="info-paragraph">
            <span className="info-type">Gmail:</span>
            <span>kriskw1999@gmail.com</span>
          </div>
          <div className="info-paragraph">
            <span className="info-type">Github:</span>
            <a
              className="link"
              target="_blank"
              href="https://github.com/kriskw1999"
            >
              Check out my projects
            </a>
          </div>
          <div className="info-paragraph">
            <span className="info-type">Linkedin:</span>
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/krzysztof-witkowski-39ba2b1a4/"
            >
              Connect with me
            </a>
          </div>
          <div className="info-paragraph">
            <span className="info-type">HackerRank:</span>
            <a
              className="link"
              target="_blank"
              href="https://www.hackerrank.com/kriskw1999?hr_r=1"
            >
              Check out my HackerRank profile
            </a>
          </div>
        </div>
        <div className="sphere-container">
          <Sphere />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
