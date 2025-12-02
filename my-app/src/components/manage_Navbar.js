import React from "react";
import './Navbar.css'
import codalogo from '../img/coda_logo.svg'
import {Link, Routes, Route} from "react-router-dom";
import Recruit from '../public/subPage/sub_recruitment'
function ManageNavbar() {
    return (
        <nav className="navbar">
            <div className='navberContainer'>
                {/*코다 로고, 클릭시 '/'로 이동*/}
                <div className={'navbar_logo'}>
                    <Link to={'/'}><img src={codalogo} alt={'codalogo'}/> </Link>
                </div>
                {/*navbar center메뉴 about, project, recruitment등을 담당*/}
                <ul className='navbar_menu'>
                    <li><Link to={'admin/recruit'} className={'noto-sans-menu'}>신청 관리</Link></li>
                    <li><Link to={'admin/contact'} className={'noto-sans-menu'}>문의 관리</Link></li>
                </ul>
                {/* 로그인 버튼 제거 */}
                {/*<ul className="navbar_login">*/}
                {/*    <li><Link to={"/login"}>LOGIN</Link></li>*/}
                {/*</ul>*/}

            </div>
        </nav>


    );
}

export default ManageNavbar;