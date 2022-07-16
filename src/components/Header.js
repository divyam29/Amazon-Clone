import React from 'react';
import logo from './../assets/amazon-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

export default function Header() {
    return (
        <div className='navbar navbar-dark bg-dark px-4 py-1 w-100 h-[10vh]' style={{ backgroundColor: "#131921" }}>
            <img src={logo} className="rounded float-left m-1" height={"7.5%"} width={"7.5%"} alt="logo" />
            <div className="input-group w-50 float-left ">
                <button className="btn btn-outline-secondary dropdown-toggle rounded-none" style={{ backgroundColor: "#f3f3f3", border: "none", borderRight: "1px  solid #d2d2d2" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">All Departments</a></li>
                    <li><a className="dropdown-item" href="/">Arts & Crafts</a></li>
                    <li><a className="dropdown-item" href="/">Automotive</a></li>
                    <li><a className="dropdown-item" href="/">Baby</a></li>
                    <li><a className="dropdown-item" href="/">Beauty & Personal Care</a></li>
                    <li><a className="dropdown-item" href="/">Books</a></li>
                    <li><a className="dropdown-item" href="/">Boys' Fashion</a></li>
                    <li><a className="dropdown-item" href="/">Computers</a></li>
                    <li><a className="dropdown-item" href="/">Deals</a></li>
                    <li><a className="dropdown-item" href="/">Digital Music</a></li>
                    <li><a className="dropdown-item" href="/">Electronics</a></li>
                    <li><a className="dropdown-item" href="/">Girls' Fashion</a></li>
                </ul>
                <input type="text" className="form-control rounded-none" />
                <button className="btn btn-outline-secondary rounded-none" style={{ backgroundColor: "#febd69", border: "none" }} type="button" id="button-addon2"><SearchIcon sx={{ color: grey[900] }} /></button>
            </div>
            <div className='signout'>
                <p className='text-zinc-300'>divyamjain29@gmail.com</p>
                <h4 className='text-white'>Sign Out</h4>
            </div>
            <div className='orders text-white'>
                <p className='text-zinc-300'>Returns</p>
                <h4 className='text-white'>& Orders</h4>
            </div>
            <div className='prime text-white'>
                <p className='text-zinc-300'>Your</p>
                <h4 className='text-white'>Prime</h4>
            </div>
            <div className="cart text-white">
                <LocalMallIcon sx={{ color: red[50] }} fontSize="large" />
            </div>
        </div>
    )
}
// /131921
// src\components\css\Navbar.css
// src\components\Navbar.js
// src\App.js