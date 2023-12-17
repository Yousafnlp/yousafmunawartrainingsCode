import React from 'react'
import BelowCover from './home-components/BelowCover'
import "../styles/AboutCover.css"
import "../styles/Contact.css"
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';


import { useState } from 'react';
import { toast } from 'react-toastify';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    course: "",
  })


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  // const navigate = useNavigate();

  

  const submitForm = async (e) => {
    try {

      e.preventDefault();
      console.log("form data", formData);

      if (!name || !email || !contact || !dob || !gender || !course) {
        toast.error("fill the complete form first")
        return false;
      }


      let result = await fetch('https://yousafmunawartrainings-backend-live.vercel.app/register', {
        method: "post",
        body: JSON.stringify({ name, email, contact, dob, gender, course }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      // console.log("final result__________", result)


      if (result.ok) {

        result = await result.json();


        if (result.message === "User Registerd Successfuly") {
          toast.success("Registerd Successfully")

          setFormData({
            name: "",
            email: "",
            contact: "",
            dob: "",
            course: "",
          })

          document.getElementById('male').checked = false;
          document.getElementById('female').checked = false;

          //       // navigate('/user')  
          // console.log("inal result__________", gender)
        }


      } else {
        toast.error("error while submiting try againaa")
      }



    } catch (error) {
      toast.error("error while submiting try again")
    }


  }

  const { name, email, contact, dob, gender, course } = formData;



  return (
    <div>


      <div class=" custom-container px-3 px-lg-5 px-md-5 mycover">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-12 col-md-12 col-sm-12 col-lg-5 d-flex justify-content-center align-items-center">
            <img src={require('../assets/yousaf ijaz.png')} class="myimg" alt="" />
          </div>
          <div class="col-12 col-md-12 col-sm-12 col-lg-7 d-flex justify-content-start flex-column">
            <div className="my-shedow">
              <h1 className='cover-heading mb-0 text-lg-start text-md-center text-sm-center text-center'>YOUSAF IJAZ MUNAWAR</h1>
              <h3 className='cover-tagline pt-1  text-lg-start text-md-center text-sm-center text-center'>CORPORATE SUCCESS TRAINER, NLP TRAINER & COACH</h3>
            </div></div>
        </div>
      </div>



      <BelowCover />

      <div className=" custom-container px-3 px-lg-5 px-md-5">

      <h2 className='my-m mb-0 text-center main-heading pb-2'>CONTACT FORM</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className='divder-1'></div>
        </div>
      </div>
      </div>

      <div className=" custom-container px-3 px-lg-5 px-md-5 d-flex mt-5 justify-content-center align-items-center">

  
        
          <div class=" form-container px-3 px-lg-5 px-md-5  my-w">
            <form >

              <label className='mb-2 form-label contact-label'>Enter Your Name:</label>
              <input type='text' placeholder='Enter Your First Name' className='p-1 form-control ' name='name' value={name} onChange={onChange} />
              


              <label className='mb-2 form-label contact-label'>Enter Your Email:</label>
              <input type='email' placeholder='Enter Your First Name' className='p-1 form-control' name='email' value={email} onChange={onChange} />

              <label className='mb-2 form-label contact-label'>Enter Your Contact Number:</label>
              <input type='number' placeholder='Enter Your First Name' className='p-1 form-control' name='contact' value={contact} onChange={onChange} />

              <label className='mb-2 form-label contact-label'>Select Your Date of Birth</label>
              <input type='date' className='p-1 form-control' name='dob' value={dob} onChange={onChange} />

              <label className=' form-label contact-label d-block mb-1' >Select Your Gender</label>
              <input type="radio" className='me-1' id='male' name='gender' value="male" onChange={onChange} />
              <label className='me-1' for='male'>Male</label>
              <input type="radio" id='female' className='me-1' name='gender' value="female" onChange={onChange} />
              <label  for='female'>Female</label><br/>

              <label className=' form-label contact-label'>Select Your concern</label>
              <select className='p-1 w-100' name='course' value={course} onChange={onChange}>
                <option selected >select your intrest</option>
                <option value="ERASING PAINFUL PAST MEMORIES WITHIN 30 MINUTES">ERASING PAINFUL PAST MEMORIES WITHIN 30 MINUTES</option>
                <option value="FREE CONSULTATION CALL">FREE CONSULTATION CALL</option>
                <option value="WELLNESS COACHING SESSION">WELLNESS COACHING SESSION</option>
                <option value="SUCCESS COACHING SESSION">SUCCESS COACHING SESSION</option>
                <option value="RESHAPE YOUR LIFE">RESHAPE YOUR LIFE</option>
                <option value="DOUBLE DOSE PRODUCTIVITY">DOUBLE DOSE PRODUCTIVITY</option>
              </select>

              
              <button onClick={submitForm} className=' contect-btn mt-5'>Submit</button>
            </form>

          </div>
            </div>
  

      <div className="custom-container px-3 px-lg-5 px-md-5">


        <h2 className='my-m mb-0 text-center main-heading'>CONNECT WITH ME ON YOUR FAVORATE SOCIAL MEDIA</h2>
        <div className=" custom-container px-3 px-lg-5 px-md-5">
          <div className="d-flex justify-content-center">
            <div className='divder-1'></div>
          </div>
        </div>
        <div className=' d-flex justify-content-center gap-3 mb-5 mt-4 align-items-center'>



          <div className="smIcon"><BsFacebook className='react-sm-icomn' /></div>
          <div className="smIcon"><BsInstagram className='react-sm-icomn' /></div>
          <div className="smIcon"><BsLinkedin className='react-sm-icomn' /></div>
          <div className="smIcon"><BsYoutube className='react-sm-icomn' /></div>

        </div>


      </div>
    </div>
  )
}

export default Contact