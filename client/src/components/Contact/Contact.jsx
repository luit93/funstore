import React from 'react'
import "./Contact.scss"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <div className="mail">
                <input type='text' placeholder='E-mail'/>
                <button>Contact</button>
            </div>
            <div className="icons">
               <Link to="https://www.linkedin.com/in/luitsaikia/" target="_blank" ><LinkedInIcon className='icon'/></Link> 
               <Link to="https://github.com/luit93"  target="_blank"><GitHubIcon className='icon'/></Link> 
               <Link to="https://luitsaikia.vercel.app/" target="_blank" ><RocketLaunchIcon className='icon'/></Link> 
            </div>
        </div>
    </div>
  )
}

export default Contact