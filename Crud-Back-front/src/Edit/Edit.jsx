import axios from "axios";
import React from "react";
import { useEffect } from "react";
import '../Edit/Edit.css'
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const { id } = useParams()
    // const history = useLocation()
    const navigate = useNavigate()
    console.log("id", id)
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: ""
    })
    const handaleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        const Edit = async () => {
            const reqdata = await axios.put(`http://localhost:4000/app/put/${id}`, user);
            // const res= await reqdata.json()
            console.log("edit", reqdata.data.resp)
            setUser(reqdata.data.resp)
        }
        Edit()
    }, [])
    const update = async (e) => {
        e.preventDefault();
        const upData = await axios.put(`http://localhost:4000/app/update/${id}`, user)
        console.log("-----", upData)
        setUser(upData)
        navigate('/')
        Edit()
    }
   
    return (
        <>
            <div className="container">
                <div className="main">
                    <form>
                        <div className="">
                            <label htmlFor='username'>Name</label>
                            <input type="text" className='mx-4' placeholder='Enter your name'
                                value={user.username}
                                onChange={handaleChange}
                                name="username"

                            />
                        </div>
                        <div className="">
                            <label htmlFor='email'>Email</label>
                            <input type="email" className='my-3 mx-4' placeholder='Enter your name'
                                value={user.email}
                                onChange={handaleChange}
                                name='email'

                            />
                        </div>
                        <div className="">
                            <label htmlFor='Password'>Password</label>
                            <input type="password" placeholder='Enter your name'
                                value={user.password}
                                onChange={handaleChange}
                                name="password"

                            />
                        </div>
                        <div className='btn post-button'>
                            <button type='submit' onClick={update} >Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Edit