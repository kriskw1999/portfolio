import React, { useState } from 'react'
import { getRandomWordIndex, useTerminalText } from './useTerminalText'
import { MESSAGES_TO_DISPLAY } from '../../config'
import TerminalCursor from './cursor'

const TerminalText: React.FC = () => {
  const [randomMessageIndex, setRandomMessageIndex] =
    useState(getRandomWordIndex())

  const { messageToShow, setMessageToShow } = useTerminalText(
    MESSAGES_TO_DISPLAY[randomMessageIndex]
  )

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setMessageToShow('')
      return setRandomMessageIndex(getRandomWordIndex())
    }

    if (e.key === 'Backspace') {
      return setMessageToShow((prev) => prev.slice(0, -1))
    }

    if (e.key.length > 1) return

    setMessageToShow((prev) => prev + e.key)
  }

  return (
    <div className="terminal-container" autoFocus>
      <div className="terminal-text">
        <span>{messageToShow} </span>
        <TerminalCursor />
        <input
          className="hidden-input"
          autoFocus
          onKeyDownCapture={onKeyDown}
        />
      </div>
    </div>
  )
}

export default TerminalText
