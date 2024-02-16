import React from 'react'
import {BiLogoGmail} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div className='socialMedia'>
            <BiLogoGmail/>
        </div>
        <div className='socialMedia'>
            <BsWhatsapp/>
        </div>
        <div className='socialMedia' color='#fff'>
            <AiOutlineGithub/>
        </div>
        <div className='socialMedia'>
            <AiFillLinkedin color='white'/>
        </div>
    </footer>
  )
}

export default Footer