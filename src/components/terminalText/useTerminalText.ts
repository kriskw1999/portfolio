import { useState, useRef, useEffect } from 'react'
import { MESSAGES_TO_DISPLAY } from '../../config'

export const useTerminalText = (text: string) => {
  const [messageToShow, setMessageToShow] = useState<string>('')
  const [extraCharacterNumber, setExtraCharacterNumber] = useState<number>(0)
  const interval = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!interval.current)
      interval.current = setInterval(() => {
        setMessageToShow((prev) => {
          const newValue = prev + text.at(prev.length - extraCharacterNumber)

          if (newValue.length === text.length + extraCharacterNumber) {
            clearInterval(interval.current)
            interval.current = undefined
          }

          return newValue
        })
      }, 100)
  }, [text])

  return { messageToShow, setMessageToShow, setExtraCharacterNumber }
}

export const getRandomWordIndex = () =>
  Math.floor(Math.random() * MESSAGES_TO_DISPLAY.length)
