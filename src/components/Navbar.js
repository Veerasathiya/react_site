import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    const [menuClick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuClick);
    }

    const closeMenu = () => {
        setMenuClick(false);
    }

    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
               <Link className="nav-logo">
               <i class="fab fa-d-and-d"></i>𝕲𝖆𝖒𝖊𝖘
               <i class="fas fa-gamepad"></i>
               </Link>
               <div className="menu-icon" onClick={handleClick} >
                   <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={menuClick ? "menu active" : "menu"}>
                   <li className="nav-item" onClick={closeMenu}>
                       <Link to="/"className="nav-link">
                           Home
                       </Link>
                   </li>
                   <li className="nav-item" onClick={closeMenu}>
                       <Link to="/games" className="nav-link">
                           Games
                       </Link>
                   </li>
                   <li className="nav-item" onClick={closeMenu}>
                       <Link to="/profile" className="nav-link">
                           My Profile
                       </Link>
                   </li>
               </ul>

            </div>
        </nav>
        </>
    )
}

export default Navbar
