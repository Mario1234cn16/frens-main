import React from 'react';
import '../styles/Navbar.css'
import Wallet from './Wallet';
import ProfileButton from './ProfileButton'



const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <ProfileButton></ProfileButton>
        <Wallet></Wallet>
      </ul>
    </nav>
  );
};

export default Navbar;
