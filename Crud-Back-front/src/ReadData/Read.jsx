import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../ReadData/Read.css'
import { useNavigate } from "react-router-dom";



const ReadData = () => {
    const navigate = useNavigate()
    const [data, setData] = React.useState([])
  
    const getData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_PORT}/app/get`)
        setData(res.data.resp)
        console.log(res.data.resp)
       
    }
    React.useEffect(() => {
        getData()
    }, [])
    
    const handleDelete = async (id) => {
        // setData(data.filter((p) => p._id !== id._id));
       const res= await axios.delete(`${process.env.REACT_APP_API_PORT}/app/delete/${id}`)
        console.log("ddd",res)
        getData()
      };

   
    return (

        <>

            <div className='container main-table-desgin'>
                
            <div className="mybtn">
                    <Link to="/create">
                        <button className=" create-btn">create New</button>
                    </Link>
                </div>
                <table className="table w-50 m-auto   ">
              
                    <thead>
                        <tr >
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">password</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ele, id) => {
                            return (

                                <tr className="theadData" key={id} >
                                    <td>{ele.username} </td>
                                    <td>{ele.email}</td>
                                    <td>{ele.password}</td>

                                    <td><button className="btn btn-outline-success" type='btn'
                                        onClick={() => handleDelete(ele._id)} >Delete</button></td>
                                    <td> <Link to={`/edit/${ele._id}`}>
                                        <button className="btn btn-outline-success" type='btn'>Edit</button>

                                    </Link>
                                    </td>


                                </tr>


                            )
                        })}



                    </tbody>
                </table>
            </div>

        </>

    )
}
export default ReadData