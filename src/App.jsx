import { useState } from 'react'
import './App.css'
import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Quiz from './pages/Quiz'
import Plans from './pages/Plans'
import PlanDetail from './pages/PlanDetail'
import Consultation from './pages/Consultation'
import Problems from './pages/Problems'
import QuizQuestions from './pages/QuizQuestions'
import Results from './pages/Results'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { RouterProvider } from 'react-router-dom'
import Layout from "./Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/plans", element: <Plans /> },
      { path: "/plans/:id", element: <PlanDetail /> },
      { path: "/consultation", element: <Consultation /> },
      { path: "/problems", element: <Problems /> },
      { path: '/quiz/:id' , element: <QuizQuestions />},
      { path: "/results", element: <Results />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
