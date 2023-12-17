import React from 'react'
import "../../styles/Vcoaching.css"
import { Link } from 'react-router-dom'


function Vcoaching() {
    return (
        <>


            <div className="custom-container px-3 px-lg-5 px-md-5">
                <div className=" my-box-shedow">
                    <div className="row justify-content-center align-items-center p-2 mt-5 pb-3">
                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 coaching-session p-2 text-center   pb-5 pb-lg-2 pb-md-2">

                            <img src={require('../../assets/mockups/wellness-coaching.png')} alt="" />
                            <h3>WELLNESS COACHING SESSION</h3>
                            <h4>First Step Towards Peace</h4>
                        <p className='p-2'>Experience a transformative wellness coaching session where I'll address your negative emotions and help you overcome depression. Embrace a brighter future brimming with endless opportunities and possibilities.</p>
                            <Link to='/wellnesscoaching' target='-blank' className='coaching-session-btn'>TAKE ACTION</Link>
                        </div>

                        <div class="col-md-12 col-12 col-sm-12 col-lg-6 coaching-session p-2 text-center">
                            <img src={require('../../assets/mockups/sussess-coaching.png')} alt="" />
                            <h3>SUCCESS COACHING SESSION</h3>
                            <h4>Learn To Create Difference</h4>
                        <p className='p-2'>Setting goals is the key to achieving the success you desire. Life requires a clear vision of your existence. We'll examine your mindset and assist you in creating an empowering vision with a structured approach.</p>
                            <Link to="/successcoaching"  target='-blank'  className='coaching-session-btn'>TAKE ACTION</Link>
                        </div>
                   
                    </div>
                </div>
            </div>

        </>
    )
}

export default Vcoaching