import profileImage from "../assets/me_no_bg.webp";
import downArrow from "../assets/down-arrow.svg";
import mouseSVG from "../assets/mouse.svg";

const MainSection = () => {
  return (
    <div className="main-container">
      <div className="text-name text-name-1">Krzysztof Witkowski</div>

      <div className="text-position text-position-1">Frontend Engineer</div>

      <div className="text-name text-name-2">Krzysztof Witkowski</div>

      <div className="text-position text-position-2">Frontend Engineer</div>

      <img
        className="profile-image"
        src={profileImage}
        alt="picture of myself"
      />

      <div className="scroll-down">
        <img className="mouse" src={mouseSVG} alt="scroll down mouse" />
        <img
          className="arrow"
          src={downArrow}
          alt="arrow pointing to the bottom"
        />
      </div>
    </div>
  );
};

export default MainSection;
