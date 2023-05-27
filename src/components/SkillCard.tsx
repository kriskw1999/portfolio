import React from "react";

type Props = {
    name: string;
    logo: string;
}

const SkillCard: React.FC<Props> = ({name, logo}) => {
    return <div className='skill-card'>
        <img className='language-logo' src={logo} alt='logo of react'/>
        <div className='card-header'>
            {name}
        </div>
    </div>
}

export default SkillCard