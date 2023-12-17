import React from 'react'
import "../../styles/Gtraining.css"
import { Link } from 'react-router-dom'

function EppmHome() {
  return (
    <>
    

    <div className="custom-container px-3 px-lg-5 px-md-5">
        <div className=" my-box-shedow">
            <div className="justify-content-center align-items-center  mt-5 p-2 pb-3 ">
                <div className=" text-center group-coaching-session p-2">

                    <img src={require('../../assets/mockups/erasing-painful-memories.png')} className='eppm-img' alt="" />
                    <h3>ERASING PAINFUL PAST MEMORIES WITHIN 30 MINUTES</h3>
                    <h4>25+ Successful Client's Testimonials</h4>
                    <p className='p-2'>I offer a 30-minute coaching session where I can help alleviate the pain from your painful past memories, without requiring you to disclose the details of your memories. I have helped over doezns of my clients to heal and get rid of their past painful memories using my secret healing methods.</p>
                    <Link   to='/erasingpainfulpastmemories'  target='_blank'  className='coaching-session-btn'>TAKE ACTION</Link>
                </div>           
            </div>
        </div>
    </div>

    </>
  )
}

export default EppmHome