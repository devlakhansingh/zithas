import React from 'react'
import zithas1 from "../assets/images/zithas1.png"
import zithas2 from "../assets/images/zithas2.jpg"
import zithas3 from "../assets/images/zithas3.png"
const About = () => {
    return (
        <>

            <section style={{ backgroundColor: "#ECE3CE", height: "100%", padding: "30px", marginTop: "10px" }} id="about-us" className="py-5">
                <div className="container ">
                    <h2 style={{ color: "#FF6C22" }} className="text-center mb-4 fw-bolder">About Our Company</h2>
                    <h5 className='text-center'>Zithas team is a diverse network of consultants and industry professionals with a global mindset and a culture.</h5>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-6">
                            <h2 style={{ color: "#FF6C22", letterSpacing: "3px" }} className='fw-bolder'>Get to know Zithas!</h2>
                            <p style={{ letterSpacing: "1px" }} className='mt-4'>
                                Zithas Technologies provides IT solutions for your business that will help it flourish in the market. We have a team of professionals holding expertise in varied fields who work towards bringing out the best solutions for your business related problems. With an experience of more than 12 years, we have worked for different kinds of clients who belong to different business fields which inturn has helped us improve and serve our customers better
                            </p>
                            <p>
                                The aim of Zithas does not simply direct towards providing good services to its clients, but at the same time we make sure that the clients have an entirely new experience with us that can help their business grow and reach its pinnacle.
                            </p>
                        </div>
                        <div className="col-md-6 mt-3">

                            <div className="row justify-content-center align-items-center">

                                <div className="col-md-6  aboutus">
                                    <img className='shadow' src="https://picsum.photos/id/878/800/800" alt="" />
                                    <img className=" shadow mt-2 " src={zithas1} alt="" />

                                </div>
                                <div className="col-md-6 aboutus mt-2 ">
                                    <img className='shadow' src={zithas3} alt="" />
                                    <img className=' shadow mt-2' src={zithas2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
