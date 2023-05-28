import SkillCard from "./SkillCard.tsx";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import { skills } from "../data/skills.ts";
import ArrowSVG from "./ArrowSVG.tsx";
import "../style/skill.scss";

const SkillsSection = () => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  const handleScroll = (scrollAmount: number) => {
    if (skillsContainerRef.current) {
      const container = skillsContainerRef.current;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const centerCard = (cardRef: HTMLDivElement) => {
    const container = skillsContainerRef.current;
    if (container && cardRef && !isMobile) {
      const containerWidth = container.offsetWidth;
      const cardLeft = cardRef.offsetLeft;
      const cardWidth = cardRef.offsetWidth;
      const scrollLeft = cardLeft + cardWidth / 2 - containerWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = (amount: number) => {
    handleScroll(amount); // Adjust the scroll amount as needed
  };

  const scrollRight = (amount: number) => {
    handleScroll(amount); // Adjust the scroll amount as needed
  };

  const bindDrag = useDrag(
    ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (!skillsContainerRef.current) return;

      // Cancel the gesture if the user starts scrolling vertically
      if (down && distance > 10) {
        cancel();
      }

      const swipeThreshold = 2;
      const swipeRight = xDir < 0 && mx < -swipeThreshold;
      const swipeLeft = xDir > 0 && mx > swipeThreshold;

      if (swipeRight) {
        scrollRight(skillsContainerRef.current.offsetWidth + 40);
      } else if (swipeLeft) {
        scrollLeft(-(skillsContainerRef.current.offsetWidth + 40));
      }
    }
  );

  return (
    <div className="skill-section">
      <div className="divider" />

      <h1 className="skill-header">Skills</h1>

      <div
        className="skill-carousel"
        {...bindDrag()}
        style={{ touchAction: "pan-y" }}
      >
        <ArrowSVG
          className="arrow-icon left-arrow"
          onClick={() => scrollLeft(-480)}
        />
        <div className="skill-container" ref={skillsContainerRef}>
          {skills.map(({ name, logo, description }) => (
            <SkillCard
              onClick={centerCard}
              name={name}
              logo={logo}
              key={name}
              description={description}
            />
          ))}
        </div>
        <ArrowSVG
          className="arrow-icon right-arrow"
          onClick={() => scrollRight(480)}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
