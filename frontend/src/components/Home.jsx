import React from 'react';
import HomeCover from './home-components/HomeCover'
import BelowCover from './home-components/BelowCover';
import "../styles/Home.css"
import Vcoaching from './home-components/Vcoaching';
import Ctrainings from "./home-components/Ctrainings";

import EppmHome from './home-components/EppmHome';
import CclientsLogos from './home-components/CclientsLogos';
import VideoSection from './home-components/VideoSection';
import TextTestimonials from './TextTestimonials'
import MainTrainingPics from './home-components/MainTrainingPic';

import Counter2 from './home-components/Counter2';
import PlayedTeestimonials from './home-components/PlayedTeestimonials';

function Home() {
  return (
    <>
      <HomeCover />
      
      <BelowCover />
      <MainTrainingPics />


<PlayedTeestimonials/>





      <h2 className='my-m mb-0 text-center main-heading pb-2'>STEP INTO PEACE</h2>


      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>

      <EppmHome />


      <h2 className='my-m mb-0 text-center main-heading pb-2'>VICTORY-SESSION</h2>
    
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>

      <Vcoaching />

      <h2 className='my-m mb-0 text-center main-heading'>5-SESSION SERIES</h2>
       
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>

      <Ctrainings />




      <h2 className='my-m mb-0 text-center main-heading-2 pt-2'>CORPORATE CLIENTS</h2>
     
      <div className=" custom-container px-3 px-lg-5 px-md-5 my-home-bg">
        <div className="d-flex justify-content-center ">
          <div className='divder-2'></div>
        </div>
      </div>  
      <div className=" my-p"></div>

      <CclientsLogos />

      <div className="pt-4 my-p mt-3"></div>
      <div className=" custom-container px-3 px-lg-5 px-md-5 my-home-bg">
        <div className="d-flex justify-content-center ">
          <div className='divder-2'></div>
        </div>
      </div>  
      <div className=" my-p"></div>

      <Counter2 />
      {/* <Trainingpics /> */}

<div className="my-p"></div>
      <VideoSection />
      <div className="my-p"></div>
      <div className="my-p"></div>

      <TextTestimonials />

    </>
  )
}

export default Home