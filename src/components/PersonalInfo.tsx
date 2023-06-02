import React, { useEffect, useRef } from "react";
import "../style/personalInfo.scss";
import Sphere from "./ThreeScene.tsx";
import VanillaTilt, { HTMLVanillaTiltElement } from "vanilla-tilt";
import { tiltOptions } from "../tilt.ts";

const PersonalInfo: React.FC = () => {
  const cardRef = useRef<HTMLVanillaTiltElement & HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    VanillaTilt.init(cardRef.current, tiltOptions);
  }, []);

  return (
    <div className="personal-info-container">
      <div className="divider" />
      <h1 className="header">Personal Info</h1>
      <div className="content">
        <div ref={cardRef} className="info-card">
          <div className="field-name">
            <span className="info-type">Name:</span>
            <span className="info-type">Location:</span>
            <span className="info-type">Phone:</span>
            <span className="info-type">Gmail:</span>
            <span className="info-type">Github:</span>
            <span className="info-type">Linkedin:</span>
            <span className="info-type">HackerRank:</span>
          </div>

          <div className="field-value">
            <span>Krzysztof Witkowski</span>
            <span>Milan</span>

            <span>+39 392 470 4791</span>
            <a
              className="link"
              target="_blank"
              href="mailto:kriskw1999@gmail.com"
            >
              kriskw1999@gmail.com
            </a>

            <a
              className="link"
              target="_blank"
              href="https://github.com/kriskw1999"
            >
              Projects
            </a>
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/krzysztof-witkowski-39ba2b1a4/"
            >
              Connect
            </a>
            <a
              className="link"
              target="_blank"
              href="https://www.hackerrank.com/kriskw1999?hr_r=1"
            >
              Profile
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
