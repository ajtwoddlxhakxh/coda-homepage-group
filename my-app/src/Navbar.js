import React from "react";
import './Navbar.css'
import codalogo from './img/coda_logo.svg'
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar">
            <div className='container'>
                <div className={'navbar_logo'}>
                    <Link to={'/'}><img src={codalogo} alt={'codalogo'}/> </Link>
                </div>

                <ul className='navbar_menu'>
                    <li><Link to={'/about'} className={'noto-sans-menu'}>ABOUT</Link></li>
                    <li><Link to={'/project'} className={'noto-sans-menu'}>PROJECTS</Link></li>
                    <li><Link to={'/recruitment'} className={'noto-sans-menu'}>RECRUITMENT</Link></li>
                    <li><Link to={'contact'} className={'noto-sans-menu'}>CONTACT</Link></li>
                </ul>

                <ul className="navbar_login">
                    <li><Link to={"/login"}>LOGIN</Link></li>
                </ul>

            </div>
        </nav>


    );
}

export default Navbar;