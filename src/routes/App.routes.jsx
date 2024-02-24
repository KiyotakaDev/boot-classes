import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import GamePage from '../Pages/GamePage'
import NavBar from '../components/NavBar'
import About from '../Pages/About'
import WikiPage from '../Pages/WikiPage'
import ErrorPage from '../Pages/ErrorPage'

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/games' element={<GamePage />} />
        <Route path='/wiki' element={<WikiPage />} />
        <Route path='/about' element={<About />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes