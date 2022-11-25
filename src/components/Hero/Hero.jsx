import React from 'react'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

import './Hero.css'


const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false
    //We calculate the window width for mobile, if it is smaller than 425px then it mobile else not

  return (
    <div className="hero" id='home'>
       
        {/* Left side */}
        <div className='left-h'>
            <Header />
            <div className="the-best-ad">
                <motion.div
                    initial={{left: mobile? '150px' : '200px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    // ... spread the transition and change the type of it
                ></motion.div>
                <span>best fitness club in the town</span>
            </div>

            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal </span>
                    <span className='stroke-text'>Body</span>
                </div>
                <div>
                    <span>We will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/* Figures */}
            <div className='figures'>
                <div>
                    <span>+ 140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+ 973</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* Buttons */}
            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        {/* Right side */}
        <div className='right-h'>
            <button className='btn'>Join Now</button>
            <motion.div className="heart-rate"
                initial={{right: '-1rem'}}
                whileInView={{ right: '4rem'}}
                transition={transition}
            >
                <img src={heart} alt='heart'/>
                <span>Heart Rate</span>
                <span>116 Bpm</span>
            </motion.div>
            <img src={hero_image} alt='hero_image' className='hero-image'/>
            <motion.img 
                initial={{right: '11rem'}}
                whileInView={{ right: '20rem'}}
                transition={transition}
            src={hero_image_back} alt='hero_image_back' className='hero_image-back'/>
            <motion.div 
                initial={{right: '37rem'}}
                whileInView={{ right: '28rem'}}
                transition={transition}
                className="calories">
                <img src={calories} alt='calories'/>
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
        
        {/* To have a clear structure of hero section, i divide it in two parts, left and right */}
    </div>
  )
}

export default Hero