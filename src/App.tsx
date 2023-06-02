import "./style/main.scss";
import MainSection from "./components/MainSection.tsx";
import React from "react";

const PersonalInfo = React.lazy(() => import("./components/PersonalInfo.tsx"));
const SkillsSection = React.lazy(
  () => import("./components/SkillsSection.tsx")
);

function App() {
  return (
    <div className="container">
      <MainSection />
      <SkillsSection />
      <PersonalInfo />
    </div>
  );
}

export default App;
