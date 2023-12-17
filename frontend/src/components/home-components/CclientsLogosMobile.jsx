

import React from 'react'
import "../../styles/CclientsLogos.css"
import AnimText2 from './AnimText2'

function CclientsLogosMobile() {
    return (
        <>

            <div style={{ marginTop: '5rem' }} className=" px-3 px-lg-5 px-md-5  custom-container">
                <div className="d-flex flex-wrap justify-content-center align-items-center mt-5 logosGap" >
                    <div className=" clients-logo-box">
                        <img src={require('../../assets/cClientsLogo/gcu-min.png')} alt="" />
                    </div>
                    <div className=" clients-logo-box">
                        <img src={require('../../assets/cClientsLogo/uet.png')} alt="" />
                    </div>
                    <div className=" clients-logo-box">
                        <img src={require('../../assets/cClientsLogo/cf-logo.jpg.png')} alt="" />
                    </div>
                    <div className=" clients-logo-box">
                        <img src={require('../../assets/cClientsLogo/bic.png')} alt="" />
                    </div>

                    <div className=" clients-logo-box">
                        <img src={require('../../assets/cClientsLogo/pitb.png')} alt="" />
                    </div>
                    <div className=" clients-logo-box">
                        <img src={require('../../assets/cClientsLogo/plan9.png')} alt="" />
                    </div>
                    <div className=" clients-logo-box">
                        <img style={{ width: "50px" }} src={require('../../assets/cClientsLogo/logogcu.png')} alt="" />
                    </div>
                </div>

                <div className="row w-100 justify-content-center align-items-center ">
                    <div className="col-12">
                        <AnimText2 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CclientsLogosMobile
