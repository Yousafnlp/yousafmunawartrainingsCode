import React from 'react'
import '../styles/Testimonials.css'



// import BelowCover from './home-components/BelowCover'
import "../styles/AboutCover.css"



import { TypeAnimation } from 'react-type-animation';



function MainTestimonials() {
  return (
    <div>

      <>

        <div class=" custom-container px-3 px-lg-5 px-md-5 mycover "
          style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        
            <div className="d-flex justify-content-center align-items-center">


              <div className="col-12 text-center">
              <TypeAnimation
      sequence={[
        'illustrations',
        1000, 
        'TESTIMONIES',
        1000,
        'documentations',
        1000,
        'demonstrations',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='head-testi'
      repeat={Infinity}
    />
              </div>
         

          </div>
        </div>

        {/* <BelowCover /> */}



        <div className=" my-black-bg  custom-container px-3 pb-5 px-lg-5 px-md-5"
          style={{ paddingTop: "110px" }}>
          <h2 className="text-center mb-0 pb-1 main-heading-3">demonstrations</h2>
          
            <div className="d-flex justify-content-center">
              <div className='divder-2'></div>
            </div>
          
          <div className="mt-5  ">
            <div className="row gap-sm-4 gap-4 gap-lg-0 gap-md-0 d-flex justify-content-center align-items-center">
              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div class="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/G_V4AOvbUUg" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/ToplB3hYU98" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/6-hAWvNSR0M" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/aiB0I-WdhGA" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/9GNAG35wM70" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/W0OFGJOGkq0" allowfullscreen></iframe>
                </div>
              </div>



              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/oS5_3LOoq84" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/N9UPuc12FLI" allowfullscreen></iframe>
                </div>
              </div>


            </div>
          </div>
        </div>


        {/* row afraz */}

        <div className='my-home-bg flex custom-container py-5 px-3 px-lg-5 px-md-5 justify-content-center align-items-center '>
          <h2 className="text-center   mb-0 pb-1 my-p main-heading-2"
          // style={{ paddingTop: "100px" }}
          >WELLNESS-TESTIMONIALS</h2>
          <div className=" custom-container px-3 px-lg-5 px-md-5">
            <div className="d-flex justify-content-center">
              <div className='divder-2'></div>
            </div>
          </div>


          <div class="d-flex justify-content-center mt-5 gap-5 align-items-center flex-wrap mb-5">


            <div className=" d-flex testimonial-box p-2 justify-content-center align-items-center">
              <div className=" text-center ">
                <div className="testi-border ">
                  <div className='testi-img-back pt-3'>

                    <img className='mb-3 ' src={require('../assets/profiles/male-profile-2.png')} alt="" />
                  </div>
                  <div className='p-4 pt-2  m-h-300 d-flex flex-column justify-content-around'>
                    <p className='text-testi-p mt-2'>I'm Haseeb, 22. Attended Yousaf's NLP Workshop, a memorable learning experience. Intrigued, I joined a 3-Month Training Program to explore NLP further. Now, as a coach and counselor, I apply the insights gained. Yousaf's teachings reshaped my thinking, guiding me toward positivity and goal achievement. The in-depth program at GCU Lahore solidified my understanding. Grateful for the transformative journey.</p>
                    <div>    <span className='text-testi-name '>hamza akram</span><br />
                      <span className='text-testi-prof '>software devaloper</span>
                    </div>
                  </div>         </div>
              </div>
            </div>


            <div className=" p-2 testimonial-box d-flex justify-content-center align-items-center">
              <div className="text-center ">
                <div className="testi-border ">
                  <div className='testi-img-back pt-3'>
                    <img className='mb-3 ' src={require('../assets/profiles/female-profile-1.png')} alt="" />
                  </div>
                  <div className='p-4 pt-2  m-h-300 d-flex flex-column justify-content-around'>
                    <p className='text-testi-p mt-2'>Zainab, 27, endured severe family issues and childhood traumas hindering my life, education, and personal growth. Yousaf's coaching and therapies were instrumental in coping with my condition. To those facing mental challenges, I encourage seeking help for a better tomorrow. Yousaf's approach is compassionate and effective, facilitating significant positive changes in my life."</p>
                    <div>    <span className='text-testi-name '>dr. Zainab</span><br />
                      <span className='text-testi-prof'>mbbS Doctor</span>
                    </div>
                  </div>         </div>
              </div>
            </div>






          </div>



          <div class="d-flex flex-wrap justify-content-center gap-5 align-items-center mb-5">

            <div className=" testimonial-box p-2 d-flex justify-content-center align-items-center">
              <div className=" text-center ">
                <div className="testi-border ">
                  <div className='testi-img-back pt-3'>
                    <img className='mb-3 ' src={require('../assets/profiles/femallr-profile-2.png')} alt="" />
                  </div>
                  <div className='p-4 pt-2  m-h-300 d-flex flex-column justify-content-around'>
                    <p className='text-testi-p mt-2'>I'm Kaynat Siddique, 23, once drowning in the frustrations of my father's second marriage and family disputes. Yousaf's intervention transformed me. His guidance reshaped my thinking, fostering positive thoughts and goal achievement. The in-person sessions at GCU Lahore were invaluable, providing a supportive environment for growth. Grateful for the transformative journey from emotional wreck to resilience.</p>
                    <div>    <span className='text-testi-name '>Kaynat Siddique</span><br />
                      <span className='text-testi-prof'>Chemist</span>
                    </div>
                  </div>         </div>
              </div>
            </div>


            <div className=" p-2 testimonial-box d-flex justify-content-center align-items-center">
              <div className="text-center ">
                <div className="testi-border ">
                  <div className='testi-img-back pt-3'>
                    <img className='mb-3 ' src={require('../assets/profiles/female-profile-3.png')} alt="" />
                  </div>
                  <div className='p-4 pt-2  m-h-300 d-flex flex-column justify-content-around'>
                    <p className='text-testi-p mt-2'>I'm Sonia, 32. Enduring the tragic loss of both parents and my first child, I developed a phobia of losing loved ones. Referred to Yousaf, his counseling and therapeutic interventions proved immensely beneficial. Gradually overcoming my phobia, I credit Yousaf and his team for their effective support. The journey from fear to resilience was truly transformative and invaluable.</p>
                    <div>    <span className='text-testi-name '>sonia</span><br />
                      <span className='text-testi-prof'>house wife</span>
                    </div>
                  </div>         </div>
              </div>
            </div>








          </div>

        </div>

        <div className="my-black-bg">
          <div className='container'>

            <h2 className="text-center  mb-0 pb-1 main-heading-3"
              style={{ paddingTop: "100px" }}
            >MIND PROGRAMING</h2>
            <div className="divder-2"></div>


            <div className="row mt-4 d-flex justify-content-center align-items-center">
              <div className="p-4 col-12 col-md-10 co-sm-12 col-lg-8">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/zk1sqYqVprA" allowfullscreen></iframe>
                </div>
              </div>





            </div>




            <h2 className="text-center  mb-0 pb-1 main-heading-3"
              style={{ paddingTop: "100px" }}
            >PERSUASSION</h2>
            <div className="divder-2"></div>
            <div className="row d-flex mt-4 justify-content-center align-items-center">
              <div className="p-4 col-12 col-md-10 co-sm-12 col-lg-8">
                <div className="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/kA1_25S-uZc" allowfullscreen></iframe>
                </div>
              </div>






            </div>






          </div>

        </div>


      </>

    </div>
  )
}

export default MainTestimonials