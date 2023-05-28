import "./style/main.scss";
import SkillsSection from "./components/SkillsSection.tsx";
import MainSection from "./components/MainSection.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";

function App() {
  return (
    <>
      <MainSection />
      <SkillsSection />
      <PersonalInfo />
    </>
  );
}

export default App;
