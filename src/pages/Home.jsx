import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar.jsx'
import * as buffer from 'buffer'
window.Buffer = buffer.Buffer;

function Home() {

  return (
    <>
      <Navbar></Navbar> 
    </>
  )
}

export default Home;
