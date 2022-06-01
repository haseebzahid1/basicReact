import React, { useState } from 'react'
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
    


const AddUser = () => {
    let history = useNavigate();
    let [user, setUser] = useState({
        
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

//   const {name,username,email,phone,website} = user;

//     const onInputChange = e => {
//         setUser({...user, [e.target.name]: e.target.value});
//         console.log(e.target.value)
//     };

//     const onSubmit = async e => {
//         e.preventDefault();
//         await axios.post("http://localhost:3001/users" , user);
//         history.push('/');
//     };
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:3001/users", user);
      history('/');
    };
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)} />

                    </div>
                    <div className="mb-3">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your User Name"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)} />
                    </div>

                    {/* <Link to='/' className='btn btn-primary btn-block'>Add User</Link> */}
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
