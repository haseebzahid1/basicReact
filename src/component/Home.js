import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3001/users");
      setUser(result.data);
    };
  
     
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                   
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link to={`/users/${user.id}`} className='btn btn-primary me-2'>View</Link>
                                <Link to={`/users/edit/${user.id}`} className='btn btn-outline-primary me-2'>Edit</Link>
                                <Link to="/" className='btn btn-danger' onClick={()=> deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
