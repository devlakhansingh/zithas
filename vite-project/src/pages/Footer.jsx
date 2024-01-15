import React from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>


            <div style={{ backgroundColor: "#ECE3CE" }} >

                <footer
                    className="text-center text-lg-start text-dark container "

                >

                    <section
                        className="d-flex justify-content-between p-4 ">
                        <div className="me-5">
                            <h2>     <span>Get connected with us on social networks:</span></h2>
                        </div>



                        <div className='social-icons '>
                            <a href="" className=" me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className=" me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className=" me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className=" me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className=" me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className=" me-4">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                    </section>



                    <section >
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <div className="logo">
                                        <img src={logo} alt="" />
                                    </div>
                                    <h6 className="text-uppercase fw-bold">Zithas Technology</h6>

                                    <p>
                                        We are here to help you automize your business. We know that when you work with automation, in order to achieve the optimal levels of effectiveness and efficiency, you need a system that is easy to use and intuitively appealing. You need a system that is well-designed.
                                    </p>
                                </div>



                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 quick">

                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    {/* <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style="width: 60px; background-color: #7c4dff; height: 2px"
                                    /> */}
                                    <p>
                                        <Link to={"/contact"} href="#!" className="text-dark">contact us</Link>
                                    </p>
                                    <p>
                                        <a target='_blank' href="https://www.zithas.com/testimonials" className="text-dark">testimonial</a>
                                    </p>
                                    <p>
                                        <a target='_blank' href="https://www.zithas.com/blog" className="text-dark">Blog</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Privacy policy</a>
                                    </p>
                                </div>



                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 quick">

                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    {/* <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style="width: 60px; background-color: #7c4dff; height: 2px"
                                    /> */}
                                    <p>
                                        <Link to={"/about"} className="text-dark">About Us</Link>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Carrier</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Help</a>
                                    </p>
                                </div>


                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    {/* <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style="width: 60px; background-color: #7c4dff; height: 2px"
                                    /> */}
                                    <p><i className="fas fa-home mr-3"></i> FF-16, Kalpvrux Compex, opp. GEB Substation, Gotri, Vadodara, Gujarat 390021</p>
                                    <p><i className="fas fa-envelope mr-3"></i> hello@zithas.com</p>
                                    <p><i className="fas fa-phone mr-3"></i>(+91) 720-288-2277</p>

                                </div>

                            </div>

                        </div>
                    </section>



                    <div
                        className="text-center p-3"

                    >
                        © 2020 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/"
                        >Zithas.com</a
                        >
                    </div>

                </footer>

            </div>
        </>
    )
}

export default Footer
