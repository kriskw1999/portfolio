import './style/main.scss'
import profileImage from './assets/me_no_bg.png'
import SkillsSection from "./components/SkillsSection.tsx";

function App() {
    return (
        <>
            <div className='main-container'>
                <div className='text-name text-name-1'>
                    Krzysztof Witkowski
                </div>

                <div className='text-position text-position-1'>
                    Frontend Engineer
                </div>

                <div className='text-name text-name-2'>
                    Krzysztof Witkowski
                </div>

                <div className='text-position text-position-2'>
                    Frontend Engineer
                </div>
                <img className='profile-image' src={profileImage} alt='picture of myself'/>
            </div>

            <SkillsSection/>

        </>
    )
}

export default App
