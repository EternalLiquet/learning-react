import React from 'react';
import logo from './logo.png'
import './Header.css';

const containterStyle = {
  fontSize: '40px'
}

const Header = () => {
  return (
    <div style={containterStyle} className="Header">
      <img src={logo} alt="logo" className="Header-logo"/>
    </div>
  );
}

export default Header;
