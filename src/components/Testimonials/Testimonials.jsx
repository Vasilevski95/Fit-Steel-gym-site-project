import React, {useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import {motion} from 'framer-motion'


import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Testimonials = () => {

  const transition = {type: 'spring', duration: 2}

  const [selected, setSelected] = useState(0)
  //Selected is index of our current review (current value), setSelected is setter, initial value 0 is first review

  const tLength = testimonialsData.length
  //We calculate the length of our review

  return (
    <div className='Testimonials' id='testimonials'>
      <div className='left-t'>
        <span>what they</span>
        <span className='stroke-text'>say about us</span>
        <motion.span
          key={selected}
          initial={{opacity: 0, x: -100}}
          animate={{ opacity: 1, x:0}}
          exit={{opacity: 0, x: 100}}
          transition={transition}
        >
          {testimonialsData[selected].review}
          {/* [0] is first review, after that we added selected */}
        </motion.span>
        <span>
          <span style={{color: 'var(--orange)'}}>
            {testimonialsData[selected].name}
          </span> {' '}
            - {testimonialsData[selected].status}
        </span>
      </div>
      <div className='right-t'>
        <div className='pictures'>
          <motion.img
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{ opacity: 1, x:0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
          src={testimonialsData[selected].image} alt='image1'/>
          <div className='arrows'>
            <button 
            onClick={() => {selected === 0 ? setSelected(tLength -1): setSelected((prev) => prev -1)}}
              //If we are on the first testimonial, then it will return us the last testimonial on clicking the left button
              //And if we are not on the first testimonial then it will take the previous value of the selected and then -1 from this value (if we are on second, it will go on first)
            className='left-button'>
              <AiOutlineArrowLeft 
                className='left-arrow'
                
              alt='left_arrow'/>
            </button>
            <button 
            onClick={() => {selected === tLength -1 ? setSelected(0) : setSelected((prev) => prev +1)}} 
              //If we are on the last testimonial, then it will return us the first testimonial on clicking the left button
              //And if we are not on the last testimonial then it will take the previous value of the selected and then +1 from this value (if we are on first, it will go on second) 
            className='right-button'>
              <AiOutlineArrowRight
                className='right-arrow'
                
              alt='right_arrow'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials