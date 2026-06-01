import React from 'react'
import './Programs.css'
import image_1 from '../../Graduation.jpg'
import image_2 from '../../postg.jpg'
import image_3 from '../../master.jpg'
import image_4 from '../../downloadd.jpg'
import imagenew from '../../images.png'

const Programs = () => {
  return (
    <div className="Programs">
        <div className="Program">
            <img src={image_1} alt="" />
            <div className="caption">
              <img src={imagenew} alt="" />
              <p>Graduation</p>
            </div>
        </div>
        <div className="Program">
            <img src={image_2} alt="" />
            <div className="caption">
              <img src={imagenew} alt="" />
              <p>Post Graduation</p>
            </div>
        </div>
        <div className="Program">
            <img src={image_3} alt="" />
            <div className="caption">
              <img src={imagenew} alt="" />
              <p>Master's</p>
            </div>
        </div>
        <div className="Program">
            <img src={image_4} alt="" />
            <div className="caption">
              <img src={imagenew} alt="" />
              <p>other</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
