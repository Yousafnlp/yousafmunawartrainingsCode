import React from 'react'
import '../../styles/Trainingpics.css'; 
function Testimonials() {
  return (
    <>
    

    <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">
 

          <h2 className="text-center mb-0 pb-1 main-heading-3">LIVE TESTIMONIALS</h2>
          <div className="divder-2"></div>

          <div className="mt-3 ">
            <div className="row gap-sm-4 gap-4 gap-lg-0 gap-md-0 d-flex justify-content-center align-items-center">
              <div className=" p-sm-0 p-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div class="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/G_V4AOvbUUg" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div class="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/ToplB3hYU98" allowfullscreen></iframe>
                </div>
              </div>

              <div className="p-0  p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
                <div class="video-container">
                  <iframe title='my life story' class="video" src="https://www.youtube.com/embed/6-hAWvNSR0M" allowfullscreen></iframe>
                </div>
              </div>

            </div>

            <div className="pt-4 pb-4 text-center testimonial-btn">
              <button>VIEW MORE</button>
            </div>
          </div>
        </div>
</>
  )
}

export default Testimonials