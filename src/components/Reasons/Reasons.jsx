import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import adidas1 from '../../assets/adidas1.png'
import nb1 from '../../assets/nb1.png'
import nike1 from '../../assets/nike1.png'



const Reasons = () => {
  return (
    <div className='Reasons' id='why us'>
        <div className='left-r'>
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
        </div>
        <div className='right-r'>
            <div className='reasons-mobile-text'>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=''/>
                    <span>over 140+ expert coaches</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span>Train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span>reliable partners</span>
                </div>
            </div>
            <span style={{color: '#fff'}}>our partners :</span>
            <div className='partners'>
                <img src={adidas1} alt="" />
                <img src={nb1} alt="" />
                <img src={nike1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Reasons