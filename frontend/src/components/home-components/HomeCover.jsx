
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/HomeCover.css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div class="custom-container mycover">
      <div className="container">
    <div class="row justify-content-center align-items-center g-2 w-100">
      <div class="col-12 col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
<img src={require('../../assets/yousaf ijaz.png')} class="myimg" alt=""/>
      </div>
      <div class="col-12 col-md-12 col-sm-12 col-lg-6">
        
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        loop={true}
        modules={[Autoplay]}
        className="mySwiper swiper-cover"
      >
        <SwiperSlide className='slides'><img src={require('../../assets/mockups/erasing-painful-memories.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../../assets/mockups/prooductivity.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../../assets/mockups/reshape-your-life.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../../assets/mockups/sussess-coaching.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides'><img src={require('../../assets/mockups/wellness-coaching.png')} alt="" /></SwiperSlide>
       
       
      </Swiper>

      </div></div>
    </div>
    </div>
        </>
  );
}
