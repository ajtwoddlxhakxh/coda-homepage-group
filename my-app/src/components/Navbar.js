import React from "react";
import './Navbar.css'
import {Link, Routes, Route} from "react-router-dom";
import Recruit from '../public/subPage/sub_recruitment'
function Navbar() {
    return (
        <nav className="navbar">
            <div className='navberContainer'>
                {/*코다 로고, 클릭시 '/'로 이동*/}
                <div className={'navbar_logo'}>
                    <Link to={'/'}><img src="/img/coda_logo.svg" alt={'codalogo'}/> </Link>
                </div>
                {/*navbar center메뉴 about, project, recruitment등을 담당*/}
                <ul className='navbar_menu'>
                    <li><Link to={'/about'} className={'noto-sans-menu'}>ABOUT</Link></li>
                    <li><Link to={'/projects'} className={'noto-sans-menu'}>PROJECTS</Link></li>
                    <li><Link to={'/recruitment'}  className={'noto-sans-menu'}>RECRUITMENT</Link></li>
                    <li><Link to={'contact'} className={'noto-sans-menu'}>CONTACT</Link></li>
                </ul>
                {/* 로그인 버튼 제거 */}
                {/*<ul className="navbar_login">*/}
                {/*    <li><Link to={"/login"}>LOGIN</Link></li>*/}
                {/*</ul>*/}

            </div>
        </nav>


    );
}

export default Navbar;