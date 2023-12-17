import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import '../../styles/Anim.css'
function TypeAnimationY() {
  return (
     
      <div  style={{height: "80px"}}>

  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'CORPORATE SUCCESS TRAINER',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'YOUNG ENTREPRENEUER',
        1000,
        'NLP TRAINER',
        1000,
        'COACH',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='anim-text-home'
      repeat={Infinity}
    />
  
    </div>
  )
}

export default TypeAnimationY
