import React from 'react'
import './Main.css'

const Main = ({subTitle,title}) => {
  return (
    <div className='main'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
      
    </div>
  )
}

export default Main
