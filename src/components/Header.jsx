import React from 'react';
import { Link } from "react-router-dom";
import header from "../assets/styles/header.scss"

const Header = (props) => {
    return (
        <header>
            <div className='layout header-block'>
                <div className="logo-block">
                    <Link to="/">
                        <img src="https://technext.github.io/original/img/core-img/logo.png" alt="" />
                    </Link>
                </div>
                <div className="primary-menu">
                    {
                        props.state.header_menu.map((menu, index) => <Link key={index} to={menu.link}>{menu.title}</Link>)
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;