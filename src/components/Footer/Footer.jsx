import React from 'react'
import './Footer.css'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Logo from '../../assets/logo.png'

const Footer = () => {

  return (
    <div className='Footer-container'>
        <div className='line'>
            <hr/>
        </div>
        <div className='icons'>
            <a 
            target="_blank"
            rel="noreferrer"
            href='https://github.com/Vasilevski95'>
                <FaGithub />
            </a>
            <a 
            target="_blank"
            rel="noreferrer"
            href='https://www.instagram.com/vasilevski50/'>
                <FaInstagram />
            </a>
            <a 
            target="_blank"
            rel="noreferrer"
            href='https://www.linkedin.com/in/%C4%91or%C4%91e-vasilevski-3a0082240/'>
                <FaLinkedinIn />
            </a>
        </div>
        <div className='logo-f'>
            <img src={Logo} alt='logo'/>
        </div>

    </div>
  )
}

export default Footer