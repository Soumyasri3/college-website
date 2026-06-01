import React from 'react'
import './About.css'
import Gietn from '../../Gietn.jpg'
import infraa from'../../infraa.jpg'
import infrab from'../../infrab.jpg'
import infrac from'../../infrac.jpg'
import infrad from'../../infrad.jpg'
import infrae from'../../infrae.jpg'
import infraf from'../../infraf.jpg'
import infrag from'../../infrag.jpg'
import image from '../../image.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-one">
            <img src={Gietn} alt="" className='Gietn' />
            <img src={infraa} alt="" className='infraa' />
            <img src={infrab} alt="" className='infrab' />
            <img src={infrac} alt="" className='infrac' />
            <img src={infrad} alt="" className='infrad' />
            <img src={infrae} alt="" className='infrae' />
            <img src={infraf} alt="" className='infraf' />
            <img src={infrag} alt="" className='infrag' />
            <img src={image} alt="" className='image' />
        
         
    </div>
    <div className="about-two">
     <h3>GIET UNIVERSITY</h3>
     <h2>GIET University- Built by the Experts, Built to deliver Experts!</h2>
     <p>At GIET University, Gunupur, we don't just teach — we transform. Tucked away in Odisha’s serene landscapes, GIETU is more than a university; it’s a launchpad for dreamers, doers, and disruptors. Here, ideas spark into innovation, classrooms become think tanks, and students evolve into confident, future-ready professionals. With a perfect blend of technology, creativity, and community, we craft an ecosystem where learning is a journey, not a race. Whether you're chasing code, crafting change, or creating tomorrow — your story begins here.</p>
    <p>In the calm of nature and the pulse of innovation, GIETU stands as a modern-day gurukul for the next generation of thinkers and trailblazers. We believe true education blends curiosity with courage — that’s why our students don’t just follow paths, they create them. With cutting-edge labs, passionate mentors, and a culture that thrives on creativity, we prepare you not just for jobs, but for journeys. Because at GIETU, it's not just about what you study — it’s about who you become.

</p>
<p>GIET University is not just an institution; it’s an experience — one that ignites ambition, fuels innovation, and shapes leaders of tomorrow. From AI to entrepreneurship, from core engineering to creative exploration, our programs are designed for the world that’s coming, not just the one we live in. With a spirit of excellence and a heart rooted in values, GIETU is where potential meets purpose. Step in, stand out, and soar.</p>
    </div>
</div>
  )
}

export default About
