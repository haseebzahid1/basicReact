import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/layout/Navbar';
import AddUser from './component/user/AddUser';
import EditUser from './component/user/EditUser';
import User from './component/user/User';
const App = () => {
  return <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/users/add" element={<AddUser />} />
    <Route path="/users/edit/:id" element={<EditUser />} />
    <Route path="/users/:id" element={<User />} />
    <Route path="*" element={<h1>Error 404 Page not found!!!</h1>} />
  </Routes>
  </BrowserRouter>
}

export default App
