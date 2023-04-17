import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/HomePage'
import TaskPage from './Pages/TaskPage'
import ContactPage from './Pages/ContactPage'
import Header from './Pages/Header'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/contact' element={<ContactPage /> } />
        <Route exact path='/todotask' element={<TaskPage />} />
        <Route exact path='/*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App