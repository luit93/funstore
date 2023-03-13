import React from 'react'
import "./Contact.scss"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Get in touch:</span>
            <div className="mail">
                <input type='text' placeholder='E-mail'/>
                <button>Contact</button>
            </div>
            <div className="icons">
                <LinkedInIcon/>
                <GitHubIcon/>
                <RocketLaunchIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact