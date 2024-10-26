import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Task from './Pages/Task'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import firebseDb from './firebase'
import { ToastContainer } from 'react-toastify'
import Forgotpass from './Pages/Forgotpass'

function App() {

  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<Forgotpass/>}/>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Task/>}/>
        <Route path='/account' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <ToastContainer />
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
