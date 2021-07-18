import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Menu(){
    return(
        <nav className="nav">
            <ul className="ul">
                <Link to="/" className="link"> <li className="menu"><i class="fa fa-fw fa-home"></i>Home</li></Link> 
                <Link to="/about" className="link"> <li className="menu"> <i class="fa fa-fw fa-user"></i> About</li> </Link>
                <Link to="/contact" className="link"><li className="menu"> <i class="fa fa-fw fa-envelope"></i>Contact</li> </Link>
            </ul>
        </nav>
    )
}

export default Menu;