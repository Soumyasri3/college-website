import React, { useRef } from 'react';
import './Tastimonials.css'; // Make sure the file name matches
import back from '../../back2.png';
import next from '../../next.png';
import Alumini_1 from '../../Alumini-1.jpg';
import Alumini_2 from '../../Alumini-2.jpg';
import Alumini_3 from '../../Alumini-3.jpg';
import Alumini_4 from '../../Alumini-4.jpg';

const Tastimonials = () => {
  const slider = useRef(null);
  const tx = useRef(0); // useRef so it persists between renders

  const slideForward = () => {
    if (tx.current > -75) {
      tx.current -= 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next} alt="" className='next-btn' onClick={slideForward} />
      <img src={back} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={Alumini_1} alt="" />
                <div>
                  <h3>Mr. Ranjan Singh a</h3>
                  <span>SIMPLILEARN,BANGALORE</span>
                </div>
              </div>
              <p>Gandhi Institute of Engineering and Technology (GIET) is my alma mater, and I am proud to have studied there. It is a renowned educational institution known for its excellence in engineering and technology education. The campus provided a conducive learning environment with modern facilities and experienced faculty members. Throughout my time at GIET, I gained valuable knowledge, skills, and cherished memories. The institute's focus on practical learning and industry exposure prepared me well for my career. I am grateful for the opportunities and education I received at GIET, which have played a significant role in shaping my professional journey.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={Alumini_2} alt="" />
                <div>
                  <h3>Mr. Priyabrata Tripathy b</h3>
                  <span>QUALITY MGT.IN L&T...</span>
                </div>
              </div>
              <p>Whatever I am today in my professional career, I would always remain indebted to my college for the platform it gave me to enter into the industry. I wish my college keeps growing and makes an impact in the education sector. Utilise your study days well by always trying to correlate what you read in the books and what practically happens on the field. This will help you stay updated with industry trends and help you grab good opportunities when you pass out of college. All the best.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={Alumini_3} alt="" />
                <div>
                  <h3>Pramod Kumar Bag c</h3>
                  <span>JK PAPER LIMITED,RAYGADA</span>
                </div>
              </div>
              <p>Good platform to interaction with Juniors, seniors and our beloved Professors. Prove Yourself better than the best in this competitive world; in case you don't prove better than the best then try to leave at least different from the rest</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={Alumini_4} alt="" />
                <div>
                  <h3>Ms. V. Anuradha d</h3>
                  <span>DELOITTE</span>
                </div>
              </div>
              <p>I am happy to be a part of this university.this is the best university for career growth.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tastimonials;
