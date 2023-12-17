import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import WellnessCoaching from './components/WellnessCoaching';
import SuccessCoaching from './components/SuccssCoaching';
import ReshapeYourLife from './components/ReshapeYourLife';
import DoubleDoseProductivity from './components/DoubleDoseProductivity';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import 'react-toastify/dist/ReactToastify.css';

import '../src/styles/Custom.css'
import ErasingPainfulMemory from './components/ErasingPainfulMemory';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Error from './components/Error';
function App() {
  return (
    <>
   <div className="custom-container">
   
<Header/>
         <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/wellnesscoaching' element={<WellnessCoaching/>}/>
         <Route path='/successcoaching' element={<SuccessCoaching/>}/>
         <Route path='/reshapeyourlife' element={<ReshapeYourLife/>}/>
         <Route path='/doubledoseprodctivity' element={<DoubleDoseProductivity/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/*' element={<Error/>}/>
         <Route path='/testimonials' element={<Testimonials/>}/>
         <Route path='/erasingpainfulpastmemories'element={<ErasingPainfulMemory/>}/>
         </Routes>
         <Footer/>
    </div>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />



       </>
  );
}

export default App;
