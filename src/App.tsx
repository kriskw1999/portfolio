import "./style/main.scss";
import SkillsSection from "./components/SkillsSection.tsx";
import MainSection from "./components/MainSection.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";

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
