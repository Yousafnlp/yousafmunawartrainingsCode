import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import '../../styles/Anim.css'

function AnimText2() {
    return (
        <div>






            <div className="pt-5 " >

                <div style={{height: "160px"}}>
                    <div className="row w-100 d-flex justify-content-center align-items-center">
                        <div className="p-2 col-12 d-flex justify-content-center align-items-center">
                            <TypeAnimation
                                sequence={[
                                    'Government College University Lahore (GCUL)',
                                    2000,
                                    'University of Engineering and Technology, Lahore',
                                    2000,
                                    'Regional Plan9 PITBs Incubator',
                                    2000,
                                    'cODING Fiesta',
                                    2000,
                                    'MSD - Management Studies Department, GCU',
                                    2000,
                                    'TICK - Techonology Incubation Center, UET',
                                    2000,
                                    'Business Incubation Center (GCU-BIC)',
                                    2000,

                                ]}
                                wrapper="span"
                                speed={50}
                                className='anim-text-home2'
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AnimText2
