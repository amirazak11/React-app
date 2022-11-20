import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Home from '../home/Home'
// import Home from '../home/Home'
// import Porto from '../body/Porto'
// import Contact from '../contact/Contact'
export default function MinLayout() {
  return (
    <>
      <NavBar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}
