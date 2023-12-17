import React, { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';

import { useState } from 'react';
import "../styles/Navbar.css"
import Whatsapp from './Whatsapp';

function Navbar() {

  const [showDropdownF, setShowDropdownF] = useState(false);
  const [showDropdownS, setShowDropdownS] = useState(false);
  const [sessionsActice, setsessionsActice] =useState(false);
  const [trainingsActice, settrainingsActice] =useState(false);

  const handleMouseEnterF = () => {
    setShowDropdownF(true);
  };

  const handleMouseLeaveF = () => {
    setShowDropdownF(false);
  };


  const handleMouseEnterS = () => {
    setShowDropdownS(true);
  };

  const handleMouseLeaveS = () => {
    setShowDropdownS(false);
  };


  let navigate = useNavigate();
  const navigatorHome = () => {
      navigate('/')
  }

  const location = useLocation();

    
  useEffect(() => {

    if (
      location.pathname === "/wellnesscoaching" ||
      location.pathname === "/successcoaching" ||
      location.pathname === "/erasingpainfulpastmemories"
    ) {
      setsessionsActice(true);
      settrainingsActice(false);
    } else if (
      location.pathname === "/doubledoseprodctivity" ||
      location.pathname === "/reshapeyourlife"
    ) {
      setsessionsActice(false);
      settrainingsActice(true);
    } else {
      setsessionsActice(false);
      settrainingsActice(false);
    }
    
  
  }, [location.pathname]);

  return (
    <>

<div className='whatsap-parent'>
        <Whatsapp/>
      </div>

      <div className='text-center fixed-top top-tagline p-1 m-0'>
      <p className='m-0 py-1'>
        ACHIEVE VICTORY WITH YOUSAF 🏆🔥 Book Your Free Consultation Call Now! 📞💼 </p>
         </div>

      <div className="row w-100 fixed-mt-pc">
        <div class="col-3 d-flex justify-content-center align-items-center">

          <div className=' d-flex justify-content-center gap-3  align-items-center'>

            <Link to='https://www.instagram.com/yousafmunawartrainings/' target='_blank'  className="smIcon"><BsInstagram className='react-sm-icomn' /></Link>
            <Link    to='https://www.youtube.com/@yousafijazmunawar' target='_blank'  className="smIcon"><BsYoutube className='react-sm-icomn' /></Link>

          </div>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">

          <div className="text-center">
            <img className='my-3  p-c' width={"270px"} onClick={navigatorHome} src={require('../../src/assets/final logo ymt upload black.png')} alt="" />
          </div>


        </div>
        <div class="col-3 d-flex justify-content-center  align-items-center">

          <div className=' d-flex justify-content-center gap-3 align-items-center'>



            <Link  to="https://www.facebook.com/yousafmunawartrainings/" target='_blank'  className="smIcon"><BsFacebook className='react-sm-icomn' /></Link>
            <Link  to='https://www.linkedin.com/in/yousafmunawartrainings/' target='_blank' className="smIcon"><BsLinkedin className='react-sm-icomn' /></Link>

          </div>
        </div>
      </div>


      <nav className="navbar  navbar-expand-lg navbar-light justify-content-center my-nav p-2 " >
        <div className="  p-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-0 mb-lg-0 ">
              <li className="nav-item px-1 ">


                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  bg-blak" : "nav-link"}
                  aria-current="page"  target='-blank'  to="/">HOME
                </NavLink>
              </li>
              <li className="nav-item px-1 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  bg-blak" : "nav-link"}
                   target='-blank'  to="/about" tabindex="-1" aria-disabled="true">ABOUT</NavLink>
              </li>

              <li className="nav-item px-1 ">
                <div className=' d-inline-block'>
                  <div className={`dropdown ${showDropdownF ? 'show' : ''}   `} onMouseEnter={handleMouseEnterF} onMouseLeave={handleMouseLeaveF}>
                    <div className=  {`nav-link dropdown-toggle ${sessionsActice ? 'bg-blak' : ''}   `} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      VICTORY COACHINGS
                    </div>
                    <ul className={`dropdown-menu ${showDropdownF ? 'show' : ''} drop-nav p-0`} aria-labelledby="dropdownMenuLink">
                      <li className='py-1 br-b-w'>
                        <NavLink 
                         className={({ isActive }) =>
                            isActive ? "nav-link dropdown-item  bg-blak" : " dropdown-item nav-link"} 
                           target='-blank'  to="/wellnesscoaching">
                          WELLNESS COACHING SESSION
                        </NavLink>
                      </li>
                      <li className='py-1 br-b-w'>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link dropdown-item  bg-blak" : " dropdown-item nav-link"}
                           target='-blank'  to="/successcoaching">
                          SUCCESS COACHING SESSION
                        </NavLink>
                      </li>
                      <li className='py-1'>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link dropdown-item  bg-blak" : " dropdown-item nav-link"}
                           target='-blank'  to="/erasingpainfulpastmemories">
                          ERASING PAINFUL PAST MEMORIES
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>


              <li className="nav-item px-1 ">
                <div className=' d-inline-block'>
                  <div className={`dropdown ${showDropdownS ? 'show' : ''}`} onMouseEnter={handleMouseEnterS} onMouseLeave={handleMouseLeaveS}>
                    <div  className={`nav-link dropdown-toggle ${trainingsActice ? 'bg-blak' : ''}   `} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      TRAINING PROGRAMS
                    </div>
                    <ul className={`dropdown-menu ${showDropdownS ? 'show' : ''} drop-nav p-0 `} aria-labelledby="dropdownMenuLink">
                      <li className='py-1 br-b-w'>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link dropdown-item  bg-blak" : " dropdown-item nav-link"}
                           target='-blank'  to="/reshapeyourlife">
                          RESHAPE YOUR LIFE
                        </NavLink>
                      </li>
                      <li className='py-1'>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link  bg-blak dropdown-item" : "nav-link dropdown-item"}
                           target='-blank'  to="/doubledoseprodctivity">
                          DOUBLE DOSE PRODUCTIVITY
                        </NavLink>
                      </li>


                    </ul>
                  </div>
                </div>

              </li>



              <li className="nav-item px-1 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  bg-blak" : "nav-link"}
                   target='-blank'  to="/contact" tabindex="-1" aria-disabled="true">CONTACT</NavLink>
              </li>
              <li className="nav-item px-1 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  bg-blak" : "nav-link"}
                   target='-blank'  to="/testimonials" tabindex="-1" aria-disabled="true">TESTIMONIALS</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
