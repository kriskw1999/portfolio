import React, { useCallback, useEffect, useRef } from "react";
import VanillaTilt, { HTMLVanillaTiltElement, TiltOptions } from "vanilla-tilt";

type Props = {
  name: string;
  logo: string;
  description: string;
  onClick: (cardRef: HTMLDivElement) => void;
};

const tiltOptions: TiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

const SkillCard: React.FC<Props> = ({ name, logo, onClick, description }) => {
  const cardRef = useRef<HTMLVanillaTiltElement & HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    VanillaTilt.init(cardRef.current, tiltOptions);
  }, []);

  const onCardClick = useCallback(() => {
    if (cardRef.current) {
      onClick(cardRef.current);
    }
  }, [onClick]);

  return (
    <div ref={cardRef} onClick={onCardClick} className="skill-card">
      <img className="language-logo" src={logo} alt="logo of react" />
      <div className="card-header">{name}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default SkillCard;
