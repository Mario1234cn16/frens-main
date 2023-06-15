import { useState } from 'react'
import '../App.css'
import '../styles/ProfilePage.css'
import Navbar from '../components/Navbar.jsx'
import * as buffer from 'buffer'
import OwnedNftsList from '../components/OwnedNftsList'
window.Buffer = buffer.Buffer;

function ProfilePage() {

  return (
    <>
        <h3 id="profileText">PROFILE</h3>
        <OwnedNftsList></OwnedNftsList>
        <Navbar></Navbar>  
    </>
  )
}

export default ProfilePage;