import React from 'react'
import "../../styles/Trainingpics.css"

function Trainingpics() {
    return (
        <>
            <div className="pt-5 my-home-bg">
                <div class="container">
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-12 col-lg-9 col-md-10 col-sm-12  p-1'>
  
                            <h2 className='text-center mt-2 mb-4 sub-heading-workshop'>CORPORATE SUCCESS TRAINER</h2>
                            <img className='workshop-img p-3' src={require('../../assets/workshopPics/SAA2.png')} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Trainingpics