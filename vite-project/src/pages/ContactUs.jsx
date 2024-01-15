import React, { useState } from 'react'


import About from './About'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import UserList from '../components/UserList'
import { saveZithas } from '../Features/ZithasSlice'

const ContactUs = () => {

    const dispatch = useDispatch()


    const [formdata, setformdata] = useState({
        name: "",
        email: ""
    })

    const { name, email } = formdata

    const Handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveZithas(formdata))
        setformdata({
            name: "",
            email: ""
        })
        toast("thanks")


    }




    return (
        <>
            <section >
                <div style={{ backgroundColor: "#ECE3CE" }} className="text-center   p-3">
                    <h1 style={{ color: "blue" }} className='fw-bolder'>Contact us</h1>

                </div>
                <div style={{ backgroundColor: "#ECE3CE" }} className=" d-flex align-item-center justify-content-around ">
                    <div className="form-section p-3 h-50 ">
                        <form onSubmit={HandleSubmit}>
                            <div className="mb-3">

                                <input name='name' value={name} onChange={Handlechange} placeholder='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">

                                <input name='email' value={email} onChange={Handlechange} placeholder='Email' type="text" className="form-control" id="exampleInputPassword1" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Subscribe</button>
                        </form>
                    </div>
                    <div className="form-text p-3 h-50">
                        <h1>
                            <div className="text-center">
                                <h1 >Zithas Technoloy</h1>
                                <h2>You're at the right place. The right time</h2>
                                <Link to={"/user-list"}>     <button className="btn btn-primary">see user</button></Link>

                            </div>

                        </h1>
                    </div>
                </div>

            </section>
            <About />
        </>
    )
}

export default ContactUs
