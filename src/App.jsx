import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact'
import MainLayout from './Components/Layout/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/experience', element: <Experience /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
      { path: '/home', element: <Home /> },
    ],
  },
])

function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
