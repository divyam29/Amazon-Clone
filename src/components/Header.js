import React from 'react';
import logo from './../assets/amazon-logo.png';
import './css/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { red } from '@mui/material/colors';

export default function Header() {
    return (
        <div className='navbar'>
            <img src={logo} className="amazon-logo" alt="logo" />
            <form className="search-form">
                <input type="text" className="search-bar" />
                <button type="submit" className="search-button">
                    <SearchIcon />
                </button>
            </form>
            <div className='signout'>
                <p>divyamjain29@gmail.com</p>
                <h4>Sign Out</h4>
            </div>
            <div className='orders'>
                <p>Returns and</p>
                <h4>Orders</h4>
            </div>
            <div className='prime'>
                <p>Your</p>
                <h4>Prime</h4>
            </div>
            <div className="cart">
                <LocalMallIcon sx={{ color: red[50] }} fontSize="large"/>
            </div>
        </div>
    )
}
// #131921
// src\components\css\Navbar.css
// src\components\Navbar.js
// src\App.js