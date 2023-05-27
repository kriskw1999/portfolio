import SkillCard from "./SkillCard.tsx";
import reactLogo from "../assets/react-icon.png";
import vueLogo from "../assets/vue-icon.png";
import nuxtLogo from "../assets/nuxt-icon.png";
import nextLogo from "../assets/next-icon.png";
import tailwindLogo from "../assets/tailwind-icon.png";

type Skill = {
    name: string;
    logo: string;
}

const skills: Skill[] = [
    {
        name: 'React',
        logo: reactLogo
    }, {
        name: 'Vue',
        logo: vueLogo
    }, {
        name: 'Nuxt',
        logo: nuxtLogo
    }, {
        name: 'Next',
        logo: nextLogo
    }, {
        name: 'Tailwind',
        logo: tailwindLogo
    },
]

const SkillsSection = () => {
    return (
        <div className='skill-section'>
            <div className='divider'/>

            <h1 className='skill-header'>Skills</h1>

            <div className='skill-container'>
                {skills.map(({name, logo}) => <SkillCard name={name} logo={logo} key={name}/>)}
            </div>
        </div>
    )
}

export default SkillsSection