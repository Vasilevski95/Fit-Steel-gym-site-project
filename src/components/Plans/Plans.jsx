import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import rightArrow from '../../assets/rightArrow.png'

const Plans = () => {
  return (
    // Plans header
    <div className='plans-container' id='plans'>
        <div className="programs-header">
            <span className='stroke-text'>ready to</span>
            <span >start your journey</span>
            <span className='stroke-text'>with us</span>
        </div>

        {/* Plans card */}
        <div className='plans'>
            
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className='features'>
                        {plan.features.map((feature, i) => (
                            <div className='feature' key={i}>
                                <img src={whiteTick} alt='whiteTick'/>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className='benefits'>
                        <span>See more benefits </span>
                        <img src={rightArrow} alt="right_arrow" />
                    </div>
                    <button className='btn'>Join now</button>

                </div>
                
            ))}
        </div>
            
    </div>
  )
}

export default Plans