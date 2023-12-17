import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../styles/AllServicesSwiper.css';

// import required modules
import { Autoplay } from 'swiper/modules';


function AllServicesSwiper() {
  return (
    <>
        <div class="custom-container" style={{backgroundColor: "black"}}>
    <div class=" custom-container px-4 px-lg-5 px-md-5 pt-3">
    <div class="row justify-content-center align-items-center g-2">
      <div class="col-12">
        
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper swiper-cover-AllServicesSwiper "
      >
        <SwiperSlide className='slides'><img src={require('../assets/mockups/wellness-coaching.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../assets/mockups/sussess-coaching.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../assets/mockups/prooductivity.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../assets/mockups/reshape-your-life.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../assets/mockups/erasing-painful-memories.png')} alt="" /></SwiperSlide>
     
      </Swiper>




      </div>
    </div>
    </div>
    </div>
</>
  )
}

export default AllServicesSwiper;