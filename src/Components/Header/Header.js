 import React from 'react';
 import logo from '../../images/logo.png'
 import './Header.css'
 
 const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt='' />
            <h2>Book<span className='verse'>Verse</span></h2>
        </div>
    );
 };
 
 export default Header;