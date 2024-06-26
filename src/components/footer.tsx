import React from 'react'
import twitter from '../assets/twitter.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import { GITHUB_URL, LINKEDIN_URL, MAIL, TWITTER_URL } from '../config'
import ContactCta from './contact-cta'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ContactCta />

      <div>
        <a href={TWITTER_URL} target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a href={`mailto:${MAIL}`}>
          <img src={mail} alt="mail" />
        </a>
        <a href={LINKEDIN_URL} target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href={GITHUB_URL} target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  )
}

export default Footer
