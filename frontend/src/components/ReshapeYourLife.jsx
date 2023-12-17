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


function WellnessCoaching() {
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
                  <img src={require('./../assets/covers/wellnness-coaching-session.png')} className='my-session-img-cover' alt="" />
                </SwiperSlide>


                <SwiperSlide className='slides'>
                  <img src={require('./../assets/covers/wellness-3.png')} className='my-session-img-cover' alt="" />
                </SwiperSlide>


                <SwiperSlide className='slides'>
                  <img src={require('./../assets/covers/wellness-2.png')} className='my-session-img-cover' alt="" />
                </SwiperSlide>

              </Swiper>




            </div>

          </div>

        </div>
      </div>


      <BelowCover />

      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <h2 className='my-m mb-0 text-center sessions-m-heading'>WELLNESS COACHING SESSION</h2>
        <div className='sessions-m-divider'></div>
        <div className="d-flex justify-content-center align-items-center">
        <img src={require('./../assets/mockups/reshape-your-life.png')} className='my-session-img mt-4' alt="" />
        </div>
      </div>


      <div className='custom-container px-3 px-lg-5 px-md-5'>
        <div className=" mt-3">
          <div className=" text-center group-coaching-session">
          <p>I will assist you in re-programing your mind, erasing your painful memories, reshaping your life, and creating a bright future with a structured approach. Long-term courses acquire a lot of time so, are not preferred. To save time for my clients, I am determined to provide a quality workshop that doesn’t disturb their schedules and also provides them with the best outcomes for lifestyle transformation.</p>
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


      <div class=" custom-container px-3 px-lg-5 px-md-5 my-m">

        <div className='row justify-content-center align-items-center'>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-3">
            <img src={require('./../assets/covers/wellness-2.png')} className='image-class w-100 image-class' alt="" />
          </div>

          <div class="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-8">
            <h3 className='mb-0'>KEY FEATURES</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              <li className='mb-1'><strong>Guiding You Towards Emotional Well-being:</strong> Supporting you on your journey to emerge from the depths of depression and helping you achieve a state of emotional well-being.</li>
              <li className='mb-1'><strong>Promoting Positive Behavioral Transformation:</strong> Facilitating the process of positive behavioral change, empowering you to make meaningful adjustments in your life.</li>
              <li className='mb-1'><strong>Boosting Your Inner Strength:</strong> Providing you with tools to grow stronger on the inside, so you can handle tough times with confidence and come out even better.</li>
              <li className='mb-1'><strong>Developing a Positive Mindset:</strong> Cultivating and nurturing a sense of positivity and optimism within yourself.</li>
            </ul>

          </div>
        </div>


        <div className='my-m row justify-content-center  flex-md-column-reverse flex-column-reverse  flex-sm-column-reverse flex-lg-row align-items-center'>
          <div class="p-3 text-center experiance  col-12 col-sm-12 col-md-12 col-lg-8">
            <h3 className='mb-0'>KEY BENIFITS</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              <li className="mb-1"><strong>Building Emotional Strength:</strong> Helping you to effectively manage and overcome a range of negative emotions, such as anger, sadness, guilt, betrayal, and fear.</li>
              <li className="mb-1"><strong>Enhanced Productivity:</strong> Providing strategies and support to boost your productivity, helping you to achieve your goals and aspirations more efficiently.</li>
              <li className="mb-1"><strong>Boosted Self-Esteem:</strong> Helping you to accept yourself and build your self-confidence, while cultivating a more positive self-image and self-worth.</li>
              <li className="mb-1"><strong>Relief from Mental Health Challenges:</strong> Offering relief from conditions such as depression, anxiety, and other mental health concerns, by addressing their underlying causes and providing effective coping strategies.</li>
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
              <li className="mb-1"><strong>Individuals Seeking Personal Growth:</strong> People who are eager to grow and evolve personally, both in terms of their emotional well-being and overall life satisfaction.</li>
              <li className="mb-1"><strong>Professionals and Students:</strong> Individuals in high-stress professions or students facing academic pressure who seek improved emotional management to enhance their productivity.</li>
              <li className="mb-1"><strong>Individuals Struggling with Unhappy Patterns:</strong> It's designed for those experiencing depression, anxiety, or other unhelpful patterns in life.</li>
              <li className="mb-1"><strong>Young Adults Discovering Themselves:</strong> Young individuals who are in the process of exploring their identity, accepting themselves, and gaining independence.</li>
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

export default WellnessCoaching