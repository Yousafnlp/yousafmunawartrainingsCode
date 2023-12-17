import React from 'react'
import BelowCover from './home-components/BelowCover'
import "../styles/Home.css"
import Testimonials from './about-components/Testimonials'
import "./../styles/Sessions.css"
import { Link } from 'react-router-dom'
import "./../styles/Gtraining.css"
import "./../styles/ImgAnimation.css"
import AllServicesSwiper from './AllServicesSwiper'
import TextTestimonials from './TextTestimonials'



function ErasingPainfulMemory() {
  return (
    <>

      <div class=" mycover">
        <div class="w-100  px-3 px-lg-5 px-md-5 py-4">
          <div class="d-flex justify-content-center gap-5 align-items-center">

          
          

            <div className=" col-12 col-md-7 col-sm-12 col-lg-7">
            <div class="video-container">

    <iframe title='my life story'  allow="autoplay" class="video" src="https://www.youtube.com/embed/-jSIExdbbCg?autoplay=1&controls=0&loop=1" allowfullscreen></iframe>

  </div>
            </div>


          </div>

        </div>
      </div>


      <BelowCover />




              
      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <h2 className='my-m mb-0 text-center sessions-m-heading'>ERASING PAINFUL PAST MEMORIES</h2>
        <div className='sessions-m-divider'></div>
        <div className="d-flex justify-content-center align-items-center">
        <img src={require('./../assets/mockups/erasing-painful-memories.png')} className='my-session-img mt-4' alt="" />
        </div>
      </div>


      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <div className=" mt-3">
          <div className=" text-center group-coaching-session">
          <p>I offer a 30-minute coaching session where I can help alleviate the pain from your painful past memories, without requiring you to disclose the details of your memories. I have helped over doezns of my clients to heal and get rid of their past painful memories using my secret healing methods.</p>
      </div>
        </div>
      </div>


      <h2 className='mt-4 mb-0 text-center  px-3 px-lg-5 px-md-5  session-tagline pt-2'>IT'S TIME FOR YOUR PEACE</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5 my-home-bg">
        <div className="d-flex justify-content-center ">
          <div className='divder-2'></div>
        </div>
      </div>
      <div className="pt-3 my-p"></div>


        
      <div class="custom-container px-3 px-lg-5 px-md-5  my-m">

<div className='row justify-content-center align-items-center'>
  <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3">
    <img src={require('./../assets/covers/wellness-2.png')} className='image-class w-100 image-class' alt="" />
  </div>

  <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
    <h3 className='mb-0'>KEY FEATURES</h3>
    <div className=" mb-3 my-sm-underline"></div>

    <ul>
      <li className="mb-1"><strong>Universal Comfort:</strong> It's a 30-minute virtual Zoom session. Most sessions are typically 1 to 2 hours long, but this one is a short 30-minute session, suitable for everyone.</li>
      <li className="mb-1"><strong>Proven Track Record:</strong> I've successfully conducted 25 sessions so far. You can listen to what people have said about their experiences.</li>
      <li className="mb-1"><strong>Self-Acceptance:</strong> Everyone has painful memories from the past, and after overcoming them, they start accepting themselves.</li>
      <li className="mb-1"><strong>Beat Depression:</strong> Many people experience depression, and erasing painful past memories is the initial step toward overcoming it.</li>
    </ul>

  </div>
</div>


<div className='my-m row justify-content-center flex-column-reverse  flex-sm-column-reverse flex-lg-row  flex-md-column-reverse  align-items-center'>
  <div class="p-3 text-center experiance  col-12 col-sm-12 col-md-12 col-lg-8">
    <h3 className='mb-0'>KEY BENIFITS</h3>
    <div className=" mb-3 my-sm-underline"></div>

    <ul>
      <li className="mb-1"><strong>Enhanced Emotional Well-being:</strong> By helping individuals heal, this session assists in achieving greater emotional well-being, leading to a happier and more fulfilling life.</li>
      <li className="mb-1"><strong>Improved Focus:</strong> By erasing the pain of painful past memories, stress is reduced, and you become more focused on life.</li>
      <li className="mb-1"><strong>Boosted Confidence and Positive Self-Image:</strong> This session helps individuals gain greater confidence in themselves and have a strong, positive self-image.</li>
      <li className="mb-1"><strong>Pathway Towards Lasting Happiness:</strong> You will discover how easy it is to program your mind, achieving inner wellness or professional success, whatever you desire.</li>
    </ul>

  </div>

  <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3 ">
    <img src={require('./../assets/covers/wellness-3.png')} className='image-class w-100' alt="" />
  </div>

</div>


<div className='my-m row justify-content-center align-items-center'>

  <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-4">
    <img src={require('./../assets/covers/wellnness-coaching-session.png')} className='image-class w-100' alt="" />
  </div>


  <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
    <h3 className='m-0'>TARGET AUDIENCE</h3>
    <div className=" mb-3 my-sm-underline"></div>

    <ul>
      <li className="mb-1"><strong>Individuals Seeking Personal Growth:</strong> This session is specifically for those who are enthusiastic about personal growth and healing on a deeper level.</li>
      <li className="mb-1"><strong>Individuals Struggling with Unhappy Patterns:</strong> It's designed for those experiencing depression, anxiety, or other unhelpful patterns in life.</li>
      <li className="mb-1"><strong>Inner Wellness Seekers:</strong> Those on a journey to find inner peace, harmony, and wellness.</li>
      <li className="mb-1"><strong>Those in Unresourceful States:</strong> Those who frequently find themselves in a challenging or unfavorable situation.</li>
    </ul>

  </div>

</div>

</div>




      <div className="pt-5 mt-5 pb-5  custom-container px-3 px-lg-5 px-md-5 reg-btn text-center">
  
        <Link to='/contact'  target='_blank'  className='coaching-session-btn2'>Register now</Link>
      </div>


      <div className="my-p"></div>
      <div className="my-p"></div>


      <TextTestimonials />
      <div className="my-p"></div>
      

      <Testimonials />

      <div className="w-100 my-home-bg pt-4"></div>

    <div className=" custom-container pt-3 px-3 px-lg-5 px-md-5"  style={{ backgroundColor: "black" }}>
      <h2 className='pt-5 mb-0 text-center main-heading-swip pb-2'>Life Mastery - Mind Mastery</h2>
        <div className="d-flex justify-content-center ">
          <div className='divder-2' ></div>
        </div>
      </div>
    
      <AllServicesSwiper />
      <div className="w-100  pb-4" style={{ backgroundColor: "black" }}></div>
    </>
  )
}

export default ErasingPainfulMemory






















