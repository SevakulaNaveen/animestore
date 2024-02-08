import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import TopAnime from './components/TopAnime.jsx'
import Geners from './components/Genres.jsx'
import AddAnime from './components/AddAnime.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Hero />} />
      <Route path='topanime' element={<TopAnime />} />
      <Route path='geners' element={<Geners />} />
      <Route path='addanime' element={<AddAnime />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
