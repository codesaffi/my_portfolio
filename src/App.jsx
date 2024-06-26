import React from 'react'
import Navbar from './assets/components/Navbar'
import Sidebar from './assets/components/Sidebar'
import About from './assets/components/About'
import Resume from './assets/components/Resume'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './assets/components/Portfolio'
import Blog from './assets/components/Blog'
import Contact from './assets/components/Contact'

const App = () => {

  const router = createBrowserRouter ([
    {
      path: "/",
      element:  <> <Navbar /> <About /> </> 
    },
    {
      path: "/Portfolio",
      element:  <> <Navbar /> <Portfolio /> </> 
    },
    {
      path: "/Blog",
      element:  <> <Navbar /> <Blog /> </> 
    },
    {
      path: "/Contact",
      element:  <> <Navbar /> <Contact /> </> 
    },
    {
      path: "/Resume",
      element:  <> <Navbar /> <Resume /> </> 
    }
  ])

  return (
    <>
    <main>
   <Sidebar />
   <div className="main-content">
   
   <RouterProvider router={router} />
   
   </div>
   </main>

    </>
  )
}

export default App