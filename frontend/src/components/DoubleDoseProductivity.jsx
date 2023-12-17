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


function DoubleDoseProductivity() {
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
                  <img src={require('./../assets/covers/double-dose-productivity-png.png')} className='my-session-img-cover' alt="" />
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
        <h2 className='my-m mb-0 text-center sessions-m-heading'>DOUBLE DOSE PRODUCTIVITY</h2>
        <div className='sessions-m-divider'></div>
        <div className="d-flex justify-content-center align-items-center">
        <img src={require('./../assets/mockups/prooductivity.png')} className='my-session-img mt-4' alt="" />
      </div>
      </div>


      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <div className=" mt-3">
          <div className=" text-center group-coaching-session">
          <p >I will give you a broad idea about your subconscious mind and allow you to master all the abilities of your brain, in attaining your major goals, multiplying your productivity, and examining your resourceful state of mind. You will learn to plant your schedule in your subconscious mind, moreover to rule out the properly structured approach for yourself to become more disciplined, organized, and ultra-productive.</p>
            </div>
        </div>
      </div>


      <h2 className='mt-4 mb-0 text-center  px-3 px-lg-5 px-md-5  session-tagline pt-2'>5 sessions, 10 aspects</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5 my-home-bg">
        <div className="d-flex justify-content-center ">
          <div className='divder-2'></div>
        </div>
      </div>
      <div className="pt-3 my-p"></div>


      <div class="custom-container px-3 px-lg-5 px-md-5  my-m">

        <div className='row justify-content-center align-items-center'>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3">
          <img src={require('./../assets/covers/wellnness-coaching-session.png')} className='image-class w-100' alt="" />
          </div>

          <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
            <h3 className='mb-0'>KEY FEATURES</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
  <li className="mb-1"><strong>Goal Achievement Mastery:</strong> Discover the secrets to setting and reaching your goals while aligning your mind for success.</li>
  <li className="mb-1"><strong>Beat Sadness:</strong> Say goodbye to sadness and unlock a brighter, happier life.</li>
  <li className="mb-1"><strong>Time-Saving Transformation:</strong> Our 5-day coaching program is designed to fit into just 1 hour of your busy schedule of a day.</li>
  <li className="mb-1"><strong>Transformative Strategies:</strong> We'll cover a wide range of life-changing techniques to help you excel in both your personal and professional life.</li>
</ul>

          </div>
        </div>


        <div className='my-m row justify-content-center flex-column-reverse  flex-sm-column-reverse  flex-md-column-reverse flex-lg-row   align-items-center'>
          <div class="p-3 text-center experiance  col-12 col-sm-12 col-md-12 col-lg-8">
            <h3 className='mb-0'>KEY BENIFITS</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
  <li className="mb-1"><strong>Transform Your Life:</strong> Experience positive changes from your personal to professional life.</li>
  <li className="mb-1"><strong>Rediscover Yourself:</strong> Overcome feelings of depression, anxiety, negative thoughts, overthinking, and other unhelpful patterns.</li>
  <li className="mb-1"><strong>Boost Your Productivity:</strong> Get strategies and support to be more productive, helping you to reach your goals faster.</li>
  <li className="mb-1"><strong>Manage Your Thoughts Effectively:</strong> Learn how to handle and redirect negative thoughts, fostering a healthier and more constructive thinking process.</li>
</ul>

          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3 ">
            <img src={require('./../assets/covers/wellness-3.png')} className='image-class w-100' alt="" />
          </div>

        </div>


        <div className='my-m row justify-content-center align-items-center'>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-4">
          <img src={require('./../assets/covers/wellness-2.png')} className='image-class w-100 image-class' alt="" />


          </div>


          <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
            <h3 className='m-0'>TARGET AUDIENCE</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
  <li className="mb-1"><strong>Individuals Seeking Transformation:</strong> For those who are willing to transform themselves to become more productive in their personal to professional lives.</li>
  <li className="mb-1"><strong>Action Takers in Life:</strong> Those who want to say goodbye to a passive lifestyle by taking the initiative.</li>
  <li className="mb-1"><strong>Ideal for Busy Lives:</strong> This series is suitable for those with limited time in our fast-paced world.</li>
  <li className="mb-1"><strong>Overcoming Challenges:</strong> Join me in overcoming depression, anxiety, or any other unhelpful patterns in life.</li>
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

export default DoubleDoseProductivity