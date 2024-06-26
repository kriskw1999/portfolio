import React from 'react'
import { MAIL } from '../config'

const ContactCta: React.FC = () => {
  // open mail on click
  const onClick = () => {
    window.location.href = `mailto:${MAIL}`
  }
  return (
    <button className="contact-cta" onClick={onClick}>
      Contact me
    </button>
  )
}

export default ContactCta
