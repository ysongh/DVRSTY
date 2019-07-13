import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/Logo.png';

const Nav = () => {
    return (
        <nav>
            <div class="nav-wrapper">
            <Link to="/" class="brand-logo center"><img src={Logo} className="nav__logo" alt="Logo"/></Link>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><Link to="/home">Home</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;