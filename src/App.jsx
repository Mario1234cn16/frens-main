import { useState } from 'react'
import './App.css'
import * as buffer from 'buffer'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
window.Buffer = buffer.Buffer;

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="profilepage" element={<ProfilePage/>} />
      </Routes>
    </>
  )
}

export default App
