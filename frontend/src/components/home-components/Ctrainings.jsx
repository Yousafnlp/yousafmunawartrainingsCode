import React from 'react'
import "../../styles/Vcoaching.css"
import { Link } from 'react-router-dom'


function Vcoaching() {
    return (
        <>


            <div className="custom-container px-3 px-lg-5 px-md-5">

                <div className=" my-box-shedow">
                    <div className="row  justify-content-center align-items-start p-2 pb-3 mt-5 ">
                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 coaching-session p-2 pb-5 pb-lg-2 pb-md-2 text-center ">
                            <img src={require('../../assets/mockups/reshape-your-life.png')} alt="" />
                            <h3>RESHAPE YOUR LIFE</h3>
                            <h4>Live The Life Of Fulfillment</h4>
                            <p className='p-2'>Experience a lifestyle transformation coaching sessions in which I'll help you to reprogram your mind, heal painful memories, and reshape your life for a brighter future through a structured approach.</p>
                            <Link  to='/reshapeyourlife'  target='-blank'  className='coaching-session-btn'>TAKE ACTION</Link>
                        </div>

                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 coaching-session p-2   text-center">
                            <img src={require('../../assets/mockups/prooductivity.png')} alt="" />
                            <h3>DOUBLE DOSE PRODUCTIVITY</h3>
                            <h4>Start Chain Reaction Of Achieving Goals</h4>
                            <p className='p-2 '>I'll illuminate your mind, enabling you to master your brain's abilities to achieve goals, enhance productivity, and tap into your resourcefulness. You'll discover how to plant your goals in your mind.</p>
                            <Link  to='/doubledoseprodctivity'  target='-blank'  className='coaching-session-btn'>TAKE ACTION</Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Vcoaching