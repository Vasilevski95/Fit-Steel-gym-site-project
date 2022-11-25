import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'


const Programs = () => {
  return (
    <div className="programs" id='programs'>
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>For Your Shaping</span>
        </div>
        {/* Programs */}
        <div className='program-categories'>
            {programsData.map((program, i) => (
                <div className="category" key={i}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>
                            Join Now 
                        </span>
                        <img src={RightArrow} alt='right_arrow'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Programs