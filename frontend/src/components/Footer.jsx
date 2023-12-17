import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';


function Footer() {

  let navigate = useNavigate();
  const navigatorHome = () => {
    navigate('/')
  }

  return (
    <>

      <div className='custom-container pb-3 pt-5 px-4 px-lg-5 px-md-5 bg-blak'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <ul className='d-flex flex-column justify-content-start gap-2'>


              <img width={"270px"} className='footer-img  p-c' onClick={navigatorHome} src={require('../../src/assets/final logo ymt upload black.png')} alt="" />

              <Link target='-blank' to="/" className='mt-3 footer-links'>
                HOME</Link>

              <Link className=' footer-links' target='-blank' to="/about">
                ABOUT</Link>

              <Link className=' footer-links' target='-blank' to="/contact">
                CONTACT</Link>
              <Link className=' footer-links' target='-blank' to="/testimonials" >
                TESTIMONIALS</Link>
            </ul>

          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <ul className='d-flex flex-column justify-content-start gap-2'>
              <div className='footer-links-heading'>ALL PROGRAMS</div>

              <Link className='mt-3 footer-links' target='-blank' to="/wellnesscoaching" >
                WELLNESS COACHING SESSION</Link>

              <Link className=' footer-links' target='-blank' to="/successcoaching"
              >SUCCESS COACHING SESSION</Link>

              <Link className=' footer-links' target='-blank' to="/erasingpainfulpastmemories"
              >ERASING PAINFUL PAST MEMORIES</Link>

              <Link className=' footer-links' target='-blank' to="/reshapeyourlife"
              >RESHAPE YOUR LIFE</Link>

              <Link className=' footer-links' target='-blank' to="/double
              doseprodctivity"
              >DOUBLE DOSE PRODUCTIVITY</Link>

            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4">

            <ul className='d-flex flex-column justify-content-start gap-2'>
              <div className='footer-links-heading'>CONTACT DETAILS</div>
              <div className='mt-3  footer-links2 ' >0337 0411579</div>


              <div className=' d-flex justify-content-start gap-3 mt-3 align-items-center'>

                <Link to='https://www.instagram.com/yousafmunawartrainings/' target='_blank' className="smIcon-footer"><BsInstagram className='react-sm-icomn' /></Link>
                <Link to='https://www.youtube.com/@yousafijazmunawar' target='_blank' className="smIcon-footer"><BsYoutube className='react-sm-icomn' /></Link>


                <Link to="https://www.facebook.com/yousafmunawartrainings/" target='_blank' className="smIcon-footer"><BsFacebook className='react-sm-icomn' /></Link>
                <Link to='https://www.linkedin.com/in/yousafmunawartrainings/' target='_blank' className="smIcon-footer"><BsLinkedin className='react-sm-icomn' /></Link>

              </div>

            </ul>

          </div>

          <div className="col-12  bottom-tagline text-center mt-5">

            <p>
            Copyright © 2023 Yousaf Munawar Trainings. All Rights Reserved
            </p>
          </div>


        </div>
      </div>

    </>
  )
}

export default Footer
