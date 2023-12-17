import React, { useState  } from 'react';

import { Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; 

function LogoSwiper() {
  const [activeIndex, setActiveIndex] = useState(1);

  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (swiper.activeIndex === 7) {
      swiper.slideTo(1)
    }
  };

  return (
    <>
      <div className="mycover-trainings">
        <div className="py-4 ">
          <Swiper
          // navigation={true}
          
            centeredSlides={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}  
            slidesPerView={1}
            // breakpoints={{
            //   768: {
            //     slidesPerView: 1,
            //   },
            //   770: {
            //     slidesPerView: 3,
            //   },
            // }}
            initialSlide={1}
            spaceBetween={0}
            speed={500}
            modules={[Autoplay]}
            className="mySwiper  "
            onSlideChange={handleSlideChange}
            
          >
         
         
         
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/gcu-min.png')} alt="" /></SwiperSlide>
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/cf-logo.jpg.png')} alt="" /></SwiperSlide>
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/pitb.png')} alt="" /></SwiperSlide>
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/bic.png')} alt="" /></SwiperSlide>
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/uet.png')} alt="" /></SwiperSlide>
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/plan9.png')} alt="" /></SwiperSlide>
         <SwiperSlide className='slides-trainings'><img className='w-25'  src={require('../../assets/cClientsLogo/gcu-min.png')} alt="" /></SwiperSlide>
      
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default LogoSwiper;










