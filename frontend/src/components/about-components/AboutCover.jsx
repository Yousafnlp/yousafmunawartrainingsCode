import React from 'react'
import "../../styles/AboutCover.css"

function AboutCover() {
  return (
    <>
      <div class="container-fluid mycover">
        <div class="container">
          <div class="row justify-content-center  align-items-center g-2">
            <div class="col-12 col-md-12 col-sm-12 col-lg-5 d-flex  justify-content-center justify-content-md-center justify-content-sm-center justify-content-lg-between   align-items-center">
              <img src={require('../../assets/yousaf ijaz.png')} class="myimg" alt="" />
            </div>
            <div class="col-12 col-md-12 col-sm-12 col-lg-6">


              <div class="video-container">

                <iframe title='my life story' controls='false' allow="autoplay" autoplay class="video" src="https://www.youtube.com/embed/5CHz01mzNG4?autoplay=1&controls=0&loop=1" allowfullscreen></iframe>

              </div>
            </div>


          </div>
        </div>

      </div>
    </>

  )
}

export default AboutCover