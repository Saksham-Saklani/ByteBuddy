import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Routes, Route } from 'react-router-dom'
import { UserProfile } from '@clerk/clerk-react'


const App = () => {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<UserProfile />} />
      </Routes>
    </>
  )
}

export default App
