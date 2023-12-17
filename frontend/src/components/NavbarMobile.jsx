import React, { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';

import { IoOptionsSharp } from "react-icons/io5";

import { useState } from 'react';
import "../styles/Navbar.css"
import Whatsapp from './Whatsapp';

function NavbarMobile() {

  const [sessionsActice, setsessionsActice] = useState(false);
  const [trainingsActice, settrainingsActice] = useState(false);
  const [showDropdownF, setShowDropdownF] = useState(false);
  const [showDropdownS, setShowDropdownS] = useState(false);

  const handleMouseEnterF = () => {
    setShowDropdownF(true);
  };



  const handleMouseEnterS = () => {
    setShowDropdownS(true);
  };


  const location = useLocation();

  let navigate = useNavigate();
  const navigatorHome = () => {
      navigate('/')
  }


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
      <div className='whatsap-parent-mob'>
        <Whatsapp />
      </div>

      <div className='text-center fixed-top  top-tagline p-1 m-0'>
        <p className='m-0 py-1'>
          ACHIEVE VICTORY WITH YOUSAF 🏆🔥 Book Your Free Consultation Call Now! 📞💼 </p>
      </div>

      <div className=" w-100 fixed-mt">
        <div class="w-100 d-flex justify-content-center my-2 align-items-center">

          <div className=' d-flex justify-content-center gap-2  align-items-center'>

            <Link to='https://www.instagram.com/yousafmunawartrainings/' target='_blank' className="smIcon-mob"><BsInstagram className='react-sm-icomn-mob' /></Link>
            <Link to='https://www.youtube.com/@yousafijazmunawar' target='_blank' className="smIcon-mob"><BsYoutube className='react-sm-icomn-mob' /></Link>

            <div className="text-center">
              <img className='mx-1 nav-logo-w  p-c' src={require('../../src/assets/final logo ymt upload black.png')} onClick={navigatorHome} alt="" />
            </div>

            <Link to="https://www.facebook.com/yousafmunawartrainings/" target='_blank' className="smIcon-mob"><BsFacebook className='react-sm-icomn-mob' /></Link>
            <Link to='https://www.linkedin.com/in/yousafmunawartrainings/' target='_blank' className="smIcon-mob"><BsLinkedin className='react-sm-icomn-mob' /></Link>




          </div>
        </div>


      </div>


      <nav className="navbar  navbar-expand-lg navbar-light justify-content-start my-nav p-2 " >
        <div className="  p-0">
          <button className="nav-btn-phn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <IoOptionsSharp className='nav-col-icon' />

          </button>
          <div className="collapse navbar-collapse mob-nav-d " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-0 mb-lg-0 py-2">


              <li className="nav-item br-b-w m-0 me-4 list-unstyled ">

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link py-2 ps-2  bg-blak" : "nav-link py-2 ps-2"}

                  aria-current="page"  target='-blank'  to="/">HOME</NavLink>
              </li>

              <li className="nav-item br-b-w m-0 me-4 list-unstyled ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link py-2 ps-2  bg-blak" : "nav-link py-2 ps-2"}
                  to="/about" tabindex="-1" aria-disabled="true">ABOUT</NavLink>
              </li>



              <li className="nav-item br-b-w m-0 me-4 list-unstyled ">
                <div className=' d-block'>
                  <div className={`dropdown  ${showDropdownF ? 'show' : ''}`} onClick={handleMouseEnterF}  >
                    <div className={`nav-link py-2 ps-2 dropdown-toggle ${sessionsActice ? 'bg-blak' : ''}   `} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      VICTORY COACHINGS
                    </div>
                    <ul className={`dropdown-menu ps-0 ${showDropdownF ? 'show' : ''} drop-nav  position-relative mb-2 w-100`} aria-labelledby="dropdownMenuLink">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak" : "dropdown-item br-b-w nav-link py-2 ps-2"}
                          target='-blank'  to="/wellnesscoaching">
                          WELLNESS COACHING SESSION
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak" : "dropdown-item br-b-w nav-link py-2 ps-2"}
                          target='-blank'  to="/successcoaching">
                          SUCCESS COACHING SESSION
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak" : "dropdown-item br-b-w nav-link py-2 ps-2"}
                          target='-blank'  to="/erasingpainfulpastmemories">
                          ERASING PAINFUL PAST MEMORIES
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>


              <li className="nav-item br-b-w m-0 me-4 list-unstyled ">
                <div className=' d-block'>
                  <div className={`dropdown  ${showDropdownS ? 'show' : ''} `} onClick={handleMouseEnterS}  >
                    <div className={`nav-link py-2 ps-2 dropdown-toggle ${trainingsActice ? 'bg-blak' : ''}   `} to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      TRAINING PROGRAMS
                    </div>
                    <ul className={`dropdown-menu ps-0 ${showDropdownS ? 'show' : ''} drop-nav position-relative mb-2 w-100`} aria-labelledby="dropdownMenuLink">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak" : "dropdown-item br-b-w nav-link py-2 ps-2"}
                           target='-blank'  to="/reshapeyourlife">
                          RESHAPE YOUR LIFE
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak" : "dropdown-item br-b-w nav-link py-2 ps-2"}
                           target='-blank'  to="/doubledoseprodctivity">
                          DOUBLE DOSE PRODUCTIVITY
                        </NavLink>
                      </li>


                    </ul>
                  </div>
                </div>

              </li>



              <li className="nav-item br-b-w m-0 me-4 list-unstyled ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link py-2 ps-2  bg-blak" : "nav-link  py-2 ps-2"}
                   target='-blank'  to="/contact" tabindex="-1" aria-disabled="true">CONTACT</NavLink>
              </li>
              <li className="nav-item m-0 me-4 list-unstyled ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link py-2 ps-2  bg-blak" : "nav-link py-2 ps-2"}
                   target='-blank'  to="/testimonials" tabindex="-1" aria-disabled="true">TESTIMONIALS</NavLink>
              </li>
            </ul>
          </div>
        </div>



      </nav>

    </>
  )
}

export default NavbarMobile
