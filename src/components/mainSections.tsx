import React from 'react'
import TerminalText from './terminalText'

const MainSection: React.FC = () => {
  return (
    <div>
      <div className="full-name">Krzysztof Witkowski</div>
      <div className="job-title">Software Engineer</div>

      <TerminalText />
    </div>
  )
}

export default MainSection
