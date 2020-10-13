import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../assets/transparentBgLogo.png';

function Header() {
  return (
    <header>
      <img
        src={picture}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="Chef Logo"
      />
      <h1>What's cookin</h1>
      <br />
      <Link to='/'>Home </Link>
      <br />
      <Link to='/profile/'>My profile </Link>
      <br />
      <Link to='/search/'>Search</Link>
    </header>
  )
}

export default Header;