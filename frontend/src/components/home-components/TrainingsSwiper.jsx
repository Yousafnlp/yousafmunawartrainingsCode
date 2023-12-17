
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/TrainingsSwiper.css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div class="container-fluid mycover-trainings mt-5">
    <div class="container">
    <div class="row justify-content-center align-items-center g-2">
        
      <Swiper
        spaceBetween={30}
        // slidesPerView={2}

        centeredSlides={true}
        autoplay={{
          delay: 2100,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper swiper-trainings "
      >
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/bicgcu.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/gcu.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/uet.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/cf.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/msdgcu.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/plan9.png')} alt="" /></SwiperSlide>
        <SwiperSlide className='slides-trainings'><img src={require('../../assets/trainings/tick.png')} alt="" /></SwiperSlide>
    
      </Swiper>

      </div>
    </div>
    </div>

        </>
  );
}
