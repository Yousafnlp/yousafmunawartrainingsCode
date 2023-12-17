import React from 'react'
import "../../styles/Trainingpics.css"
import Counter from './Counter'
import TypeAnimationY from './TypeAnimation'

function MainTrainingPics() {
    return (
        <>

<div className="custom-container my-home-bg  px-3 px-lg-5 px-md-5">
               <div className="pt-5 pb-4 d-flex  justify-content-center  align-items-center ">
               
                    <div className='row justify-content-center mt-3 w-100 align-items-center  '>
                        <div className='col-12 col-lg-5 col-md-8 col-sm-12 '>
         <img className='workshop-img' src={require('../../assets/workshopPics/SAA2.png')} alt="" />
                        </div>

                        <div className='col-12 col-lg-4 col-md-8 col-sm-12 pt-5 pt-lg-0 pt-md-0 ms-0 ms-sm-0 ms-md-0 ms-lg-3'>
    <Counter/>
    <TypeAnimationY/>
                        </div>
                    </div>
                    </div>        
            </div>
        </>
    )
}

export default MainTrainingPics