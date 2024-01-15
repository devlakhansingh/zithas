import React from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav style={{ backgroundColor: "#ECE3CE" }} className="  navbar position-sticky w-100 navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logo">
                        <Link to={"/"}><img src={logo} alt="" /></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={{ marginLeft: "330px" }} className="navbar-nav  me-auto mb-5 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link to={"/about"} className="nav-link active" aria-current="page" href="#">About us</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link to={"/contact"} className="nav-link active" aria-current="page" href="#">Contact</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" aria-current="page" href="https://www.zithas.com/career">Career</a>
                            </li>
                        </ul>
                        <div className="contact-info" style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 10px' }}>Phone: 877-069-2495</p>
                            <p style={{ margin: '0 10px' }}>Email: Lakhansingh8569@gmail.com</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

