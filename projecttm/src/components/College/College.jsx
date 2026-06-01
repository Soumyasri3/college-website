

import React from 'react'
import './College.css'

const College = () => {
  return (
    <div className='college-container'>
      <div className='college-content'>
        <div className="college-giet">
          <h1>GIET University - An Amalgamation of Academics and Research Based Learning</h1>
          <div className="college-details">
            <p>
              GIET University leaps forward with a remarkable vision to stand at par as a globally recognized University. It strives to offer the highest quality academics backed by profound research and advanced teaching methods for students to emerge as the global leaders and entrepreneurs of tomorrow.
            </p>
            <p>
              <strong>Vision:</strong> To evolve into a globally acclaimed university that pioneers academic brilliance, fosters cutting-edge research, and cultivates innovation-driven, entrepreneurial minds empowered by the latest technological advancements.
            </p>
            <button className='explore-btn'>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default College

