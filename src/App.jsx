import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './comonents/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Gallary from './pages/Gallary'
import Calculator from './pages/Calculator'
import AdminLayout from './admin/AdminLayout'
import SolarMap from './pages/SolarMap'
import Login from './pages/Login'
import ContactTable from './admin/ContactTable'
import AdminProfile from './admin/AdminProfile'
import AdminProtected from './protecteds/AdminProtected'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/solarmap' element={<SolarMap />} />


        </Route>
        <Route path="/admin" element={<AdminProtected compo={<AdminLayout />} />}>
          <Route path='contacttable' element={<ContactTable />} />
          <Route path='adminprofile' element={<AdminProfile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>



  </>
}

export default App