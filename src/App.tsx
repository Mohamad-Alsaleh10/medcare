import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ShowProduct from './componnents/ShowProducts/ShowProduct';
import Tashkhes from './pages/tashkhes/Tashkhes';
import Login from './pages/Login/Login';
import LoginA from './pages/Admin/Login';

import Register from './pages/register/Register';
import Wasfat from './pages/Wasfat/Wasfat';
import UserInfo from './pages/UserInfo/UserInfo';
import UpdateUser from './pages/UserInfo/UpdateUser';
import Admin from './pages/Admin/Admin';
import AddUserInfo from './pages/UserInfo/AddUserInfo';





function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<Home />} />
          <Route path="/user/about" element={<About />} />
          <Route path="/user/tashkhes" element={<Tashkhes />} />
          <Route path="/user/wasfat" element={<Wasfat/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
          {/* <Route path="/user/brands/:id" element={<BrandPage />} /> */}
          <Route path="/user/productDetails/:id" element={<ShowProduct />} />
          <Route path="/user/contact" element={<Contact />} />
          {/* <Route path="/user/certifications" element={<Certification />} /> */}
          <Route path="/user/info" element={<UserInfo />} />
          <Route path="/user/info/add" element={<AddUserInfo />} />

          <Route path="/user/update" element={<UpdateUser/>} />


          {/* admin */}
          <Route path="/admin" element={<LoginA/>} />
          <Route path="/admin/home" element={<Admin/>} />


        </Routes>
    </>
  )
}

export default App
