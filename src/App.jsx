import React, { Component } from 'react' ;
import MinLayout from './components/mainLayout/MainLayout';
import About from './components/about/About';
import Porto from './components/portofolio/porto/Porto';
import Home from './components/home/Home'
import Contact from './components/contact/Contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 function App() {
  const routers = createBrowserRouter([
    {
    path:"/", element: <MinLayout/>,children:[
      {index:true,element:<Home/>},
      {path:"porto",element:<Porto/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
    ],
  }
  ])
  return (
    <>

<RouterProvider router={routers}>
</RouterProvider>

</>
  )
}
export default App;