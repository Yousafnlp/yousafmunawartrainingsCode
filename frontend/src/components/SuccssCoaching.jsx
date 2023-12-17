import React from 'react'
import BelowCover from './home-components/BelowCover'
import "../styles/Home.css"
import Testimonials from './about-components/Testimonials'
import "./../styles/Sessions.css"
import "./../styles/Gtraining.css"
import "./../styles/ImgAnimation.css"
import AllServicesSwiper from './AllServicesSwiper'
import TextTestimonials from './TextTestimonials'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../styles/AllServicesSwiper.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'


function SuccessCoaching() {
  return (
    <>

      <div class=" mycover">
        <div class="w-100">
          <div class="d-flex justify-content-center align-items-center">

            <div class="col-12">

              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 1700,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper swiper-cover-AllServicesSwiper "
              >
 <SwiperSlide className='slides'>
                   <img src={require('./../assets/covers/success-coaching-session.png')} className='my-session-img-cover' alt="" />
                 </SwiperSlide>


                 <SwiperSlide className='slides'>
                   <img src={require('./../assets/covers/productivity-2.png')} className='my-session-img-cover' alt="" />
                 </SwiperSlide>


                 <SwiperSlide className='slides'>
                   <img src={require('./../assets/covers/productivity-3.png')} className='my-session-img-cover' alt="" />
                 </SwiperSlide>

              </Swiper>




            </div>

          </div>

        </div>
      </div>


      <BelowCover />

      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <h2 className='my-m mb-0 text-center sessions-m-heading'>SUCCESS COACHING SESSION</h2>
        <div className='sessions-m-divider'></div>
        <div className="d-flex justify-content-center align-items-center">
          <img src={require('./../assets/mockups/sussess-coaching.png')} className='my-session-img mt-4' alt="" />
        </div>
      </div>


      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <div className=" mt-3">
          <div className=" text-center group-coaching-session">
             <p>Setting goals is the key to achieving the success you desire. Life requires a clear vision of your existence. We'll examine your mindset and assist you in creating an empowering vision with a structured approach.</p>
          </div>
        </div>
      </div>


      <h2 className='mt-4 mb-0 text-center  px-3 px-lg-5 px-md-5  session-tagline pt-2'>FIRST STEP TOWARDS SUCCESS</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5 my-home-bg">
        <div className="d-flex justify-content-center ">
          <div className='divder-2'></div>
        </div>
      </div>
      <div className="pt-3 my-p"></div>


             <div class="custom-container px-3 px-lg-5 px-md-5 my-m">
         <div className='row justify-content-center align-items-center'>

           <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3">
             <img src={require('./../assets/covers/productivity-2.png')} className='image-class w-100 image-class' alt="" />
           </div>

           <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
             <h3 className='mb-0'>KEY FEATURES</h3>
             <div className=" mb-3 my-sm-underline"></div>

             <ul>
               <li className='mb-1'><strong>Comprehensive Success Strategy:</strong> In just one coaching session, I will equip you with a well-rounded success strategy designed to achieve your objectives.</li>
               <li className='mb-1'><strong>Empowering Belief Adoption:</strong> Together, we will work on adopting empowering beliefs that drive you towards your aspirations.</li>
               <li className='mb-1'><strong></strong> Corporate record: Up to this point, I have completed several training and coaching sessions. I am highly proficient in goal setting and assisting individuals in achieving their objectives.</li>
               <li className='mb-1'><strong>Task List for Time Management:</strong> Learn the art of creating a task list to maximize your time management skills and boost productivity.</li>
             </ul>

           </div>
         </div>


         <div className='my-m row justify-content-center flex-column-reverse  flex-sm-column-reverse flex-md-column-reverse flex-lg-row align-items-center'>
           <div class="p-3 text-center experiance  col-12 col-sm-12 col-md-12 col-lg-8">
             <h3 className='mb-0'>KEY BENIFITS</h3>
             <div className=" mb-3 my-sm-underline"></div>

             <ul>
               <li className='mb-1'><strong>Enhanced Clarity:</strong> My coaching sessions are dedicated to building clarity in your vision by adopting empowering beliefs and refining your goals.</li>
               <li className='mb-1'><strong>Task List Mastery:</strong> You will learn the art of creating effective task lists for improved time management. This skill empowers you to make efficient use of your time.</li>
               <li className='mb-1'><strong>Personalized Progress:</strong> My coaching sessions are customized for you, addressing your unique challenges and assisting you in overcoming these obstacles to maximize your potential.</li>
               <li className='mb-1'><strong>Tools for Overcoming Challenges:</strong> You acquire the essential tools to overcome the challenges you face on your journey to success.</li>
             </ul>

           </div>

           <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3 ">
             <img src={require('./../assets/covers/productivity-3.png')} className='image-class w-100' alt="" />
           </div>
         </div>


         <div className='my-m row justify-content-center align-items-center'>

           <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-4">
             <img src={require('./../assets/covers/double-dose-productivity-png.png')} className='image-class w-100' alt="" />
           </div>


           <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
             <h3 className='m-0'>TARGET AUDIENCE</h3>
             <div className=" mb-3 my-sm-underline"></div>
             <ul>
               <li className='mb-1'><strong>Transformation Seekers:</strong> People who aim to achieve long-term transformation in their personal and professional lives.</li>
               <li className='mb-1'><strong>Mind-Body Sync Enthusiasts:</strong> Those who recognize the importance of aligning their mental and physical well-being, striving for harmony and balance.</li>
               <li className='mb-1'><strong>Action Takers:</strong> Individuals who are driven by the desire to take control and make things happen.</li>
               <li className='mb-1'><strong>Task Achievers:</strong> People who want to get better at completing tasks efficiently, aiming to improve their productivity and time management skills.</li>
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

export default SuccessCoaching






















