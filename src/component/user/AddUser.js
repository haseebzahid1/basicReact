import axios from 'axios'
import React, { useState } from 'react'
import {useHistory,Link } from "react-router-dom";



const AddUser = () => {
    var history = useHistory();
    const [user, setUser] = useState({
        
        firstName: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    });

  const {firstName,userName,email,phone,website} = user;

    const onInputChange = e => {
        setUser({...user, [e.target.firstName]:e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users" , user);
        history.push("/home");
    };

    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="First Name"
                            value={firstName}
                            onChange={e => onInputChange(e)} />

                    </div>
                    <div className="mb-3">
                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Your User Name"
                            name="User Name"
                            value={userName}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Your Email Address"
                            name="Email Address"
                            value={email}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="Phone Number"
                            value={phone}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="Website Name"
                            value={website}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <Link to='/' className='btn btn-primary btn-block'>Add User</Link>
                </form>
            </div>
        </div>
    )
}

export default AddUser
