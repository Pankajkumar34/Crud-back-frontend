import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import '../Crud/Crud.css';


const Crud = () => {

    const navigate = useNavigate()
    // stste here for stste change
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

//   here-handle-change buttom of courd

    const handaleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    // Submit buttom here for submit api here post api

    const Submit = () => {
        axios.post("http://localhost:4000/app/post", {
            username: user.username,
            email: user.email,
            password: user.password,
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log("not found")
        })
        navigate('/')
        setUser()
    }


    return (
        <>
        {/* multiple fields inputs  */}
            <div className="container">
                <div className="main">
                    <form>
                        <div className="">
                            <label htmlFor='username'>Name</label>
                            <input type="text" className='mx-4' placeholder='Enter your name' name="username"
                                value={user.username}

                                onChange={handaleChange}
                            />
                        </div>
                        <div className="">
                            <label htmlFor='email' >Email</label>
                            <input className='my-3 mx-4' type="email" placeholder='Enter your name' name='email'
                                value={user.email}
                                onChange={handaleChange}
                            />
                        </div>
                        <div className="">
                            <label htmlFor='Password'>Password</label>
                            <input type="text"  className=' mx-1' placeholder='Enter your name' name="password"
                                value={user.password}
                                onChange={handaleChange}
                            />
                        </div>
                         {/* button here submit */}
                        <div className='btn post-button'>
                        <Link to="/">
                            <button onClick={Submit} className="btn btn-primary">
                            Post
                            </button>
                        </Link>
                    </div>
                    </form>
                   
                 
                </div>
            </div>
        </>
    )
}
export default Crud