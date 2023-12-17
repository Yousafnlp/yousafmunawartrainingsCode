import React from 'react'
import AboutCover from './about-components/AboutCover'
import BelowCover from './home-components/BelowCover'
import "../styles/Home.css"
import YousafIntro from './about-components/YousafIntro'
import MyLifeStory from './about-components/MyLifeStory'
import CclientsLogos from './home-components/CclientsLogos'
import Counter from './home-components/Counter'
import Experiance from './about-components/Experiance'
import Testimonials from './about-components/Testimonials'
import AboveFooter from './AboveFooter'

import TextTestimonials from './TextTestimonials'
import MainTrainingPics from './home-components/MainTrainingPic'
function About() {
  return (
    <>
    <AboutCover/>
    <BelowCover/>
<MainTrainingPics/>
    <h2 className='my-m mb-0 text-center main-heading'>YOUSAF IJAZ MUNAWAR</h2>
    <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>
    <YousafIntro />

    <h2 className='my-m mb-0 text-center main-heading'>MY LIFE STORY</h2>
    <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>

 
    <MyLifeStory/>

    <h2 className='my-m mb-0 text-center main-heading'>CORPORATE CLIENTS</h2>
    <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>

    <CclientsLogos/>

<h2 className='mt-5 mb-0 text-center main-heading'>EXPERIANCE</h2>
<div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>

<Experiance/>

<div className="my-m"></div>

<div className="my-p"></div>
<div className="my-p"></div>

<Testimonials/>
<div className="my-p"></div>


      <TextTestimonials />

    </>
  )
}

export default About