import React from 'react'
import "../styles/TextTestimonials.css"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';




function TextTestimonials() {
    return (
        <>

            <div className="pt-5 my-home-bg custom-container ">
                <h2 className="text-center mb-0 pb-2 main-heading-3">SATISFIED CLIENTS</h2>
                <div className=" custom-container px-3 px-lg-5 px-md-5">
                    <div className="d-flex justify-content-center">
                        <div className='divder-2'></div>
                    </div>
                </div>
            </div>

            <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">

                <div class="row justify-content-center align-items-center">
                    <div class="col-12">

                        <Swiper
                            centeredSlides={true}
                            autoplay={{
                                delay: 2200,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper swiper-cover-text-texti pb-5"
                        >

                            <SwiperSlide >
                                <div className=" p-2 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-8 col-12 text-center ">
                                        <div className="testi-border ">
                                            <div className='testi-img-back pt-3'>
                                                <img className='mb-3 ' src={require('../assets/profiles/male-profile-2.png')} alt="" />
                                            </div>
                                            <div className='p-4 pt-2 m-h-280 d-flex flex-column justify-content-around '>
                                                <p className='text-testi-p mt-2'>I am Haseeb and I am 22 years old. I have attended Yousaf's NLP Workshop on mind Programming. It was a memorable learning experience for me. After that workshop I was intrigued to know more about this vast NLP field. Then to satisfy my quench to explore NLP field I joined a Three Months Training Program. Now I am working as a coach and a
                                                    counsellor.</p>
                                                    <div>
                                                <span className='text-testi-name '>hamza akram</span><br />
                                                <span className='text-testi-prof '>software devaloper</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide >
                                <div className=" p-2 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-8 col-12 text-center ">
                                        <div className="testi-border ">
                                            <div className='testi-img-back pt-3'>
                                                <img className='mb-3 ' src={require('../assets/profiles/female-profile-1.png')} alt="" />
                                            </div>
                                            <div className='p-4 pt-2 m-h-280 d-flex flex-column justify-content-around'>
                                            <p className='text-testi-p mt-2'>Zainab here. I am 27 years old. I suffered from severe family issues and childhood traumas for many years which remained a notable hindrance in my life domains especially education and personal life. I have been taking coaching along with therapies from Yousaf. This really helped me in coping out of my condition. Those suffering from same or some other mere or severe mental issues, I'd highly encourage them to contact and take a step towards a furnished tomorrow.</p>
                                            
                                            <div>
                                            <span className='text-testi-name '>dr. Zainab</span><br />
                                            <span className='text-testi-prof'>mbbS Doctor</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            

                            <SwiperSlide >
                                <div className=" p-2 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-8 col-12 text-center ">
                                        <div className="testi-border ">
                                            <div className='testi-img-back pt-3'>
                                                <img className='mb-3 ' src={require('../assets/profiles/femallr-profile-2.png')} alt="" />
                                            </div>
                                            <div className='p-4 pt-2 m-h-280 d-flex flex-column justify-content-around'>
                                            <p className='text-testi-p mt-2'>My name is Kaynat Siddique. I am 23 years old. I had developed frustrated wilderness in me due to my father's second marriage. I had seen enough family disputes. My mother became more emotionally devastated and I became the more vulnerable wreck of emotional breakdown. Then I happened to meet Yousaf and he helped me in shaping the way I used to think. He guided me well in inducing positive thinking and achieving my goals. I had attended in person sessions at GCU Lahore.</p>
                                            <div>
                                            <span className='text-testi-name '>Kaynat Siddique</span><br />
                                            <span className='text-testi-prof'>Chemist</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide >
                                <div className=" p-2 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-8 col-12 text-center ">
                                        <div className="testi-border ">
                                            <div className='testi-img-back pt-3'>
                                                <img className='mb-3 ' src={require('../assets/profiles/female-profile-3.png')} alt="" />
                                            </div>
                                            <div className='p-4 pt-2 m-h-280 d-flex flex-column justify-content-around'>
                                                <p className='text-testi-p mt-2'>My name is Sonia. I am 32 years old. I had tragic sufferings of losing my mother and then my father one after other in a finite time gap. Then I lost my first child which developed within me a phobia of losing close ones without any prominent causes. I was referred here and I was counseled and therapeutic interventions were administered on me. This gradually helped me to get over my phobic condition. This was really helpful here.</p>
                                            <div>
                                                <span className='text-testi-name '>sonia</span><br />
                                            <span className='text-testi-prof'>house wife</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>




                    </div>
                </div>
            </div>






















        </>
    )
}

export default TextTestimonials